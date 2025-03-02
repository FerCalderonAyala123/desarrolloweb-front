import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchQuery = "";
  usuario: any = "";
  listaUsuarios: any [] =  [];

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  search(){
    if (this.searchQuery.trim() === '') {
      this.listaUsuarios = []; // Limpiar resultados si no hay búsqueda
      return;
    }

    const elasticsearchUrl = 'http://localhost:9200/users/_search'; // URL de Elasticsearch
    const query = {
      query: {
        match: {
          name: this.searchQuery // Se buscará en el campo 'name'
        }
      }
    };

    this.http.post<any>(elasticsearchUrl, query).subscribe(
      response => {
        this.listaUsuarios = response.hits.hits.map((hit: any) => hit._source); // Extrae los datos de los resultados
      },
      error => {
        console.error('Error al buscar en Elasticsearch:', error);
      }
    );
  }


  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
