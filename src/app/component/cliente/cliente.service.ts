import { Injectable } from '@angular/core';
import { Cliente, ClientePayload } from './cliente.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService 
{
  //URL do backend
  baseUrl = "http://localhost:8080/clientes"

  //Construtor do serviço, aonde injetamos o MatSnackBar e HttpClient
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void
  {
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }

  //Metodo para criar cliente
  create(cliente: ClientePayload): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  //Metodo para carregar os dados do cliente
  read(): Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this.baseUrl)
  }
  //Metodo para carregar os dados do cliente por ID
  readById(id: string): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  //Metodo para atualizar os dados do cliente
  update(cliente: Cliente): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${cliente.cliId}`
    return this.http.put<Cliente>(url, cliente)
  }

  //Metodo para deletar os dados do cliente por ID
  delete(id: number): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }  
}
