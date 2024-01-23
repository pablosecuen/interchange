export interface User {
  ID: string;
  Nombre: string;
  Apellido: string;
  Telefono: string;
  Email: string;
  Password: string;
  Anotaciones?: string | null;
  Tipo?: string;
  Activo: boolean;
  Grado_ID?: string | null;
  NombreAdulto?: string | null;
  ApellidoAdulto?: string | null;
  TelefonoAdulto?: string | null;
    EmailAdulto?: string | null;
    RegistroNotas:any
}