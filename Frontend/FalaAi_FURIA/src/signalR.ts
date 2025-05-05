import * as signalR from '@microsoft/signalr'

// Exporta a instância da conexão com SignalR
export const connection = new signalR.HubConnectionBuilder()
  .withUrl('http://localhost:5007') // Altere para o endereço real da sua API
  .withAutomaticReconnect()
  .configureLogging(signalR.LogLevel.Information)
  .build()

// Tipagem opcional para mensagens (pode ser adaptada)
export interface ChatMessage {
  user: string
  message: string
}
