export interface RecetarioResponse {
    recetas:  Receta[];
    doctores: Doctor[];
}

export interface Doctor {
    per_id:              number;
    per_nombre:          string;
    per_clave_documento: string;
    per_telefono:        string;
    per_logo:            string;
    per_universidad:     string;
}

export interface Receta {
    rec_id:            number;
    rec_fksucursal:    number;
    rec_fkdoctor:      number;
    rec_doctor:        string;
    rec_folio:         string;
    rec_fecha:         string;
    rec_hora:          string;
    rec_paciente:      string;
    rec_edad:          string;
    rec_sexo:          RecSexo;
    rec_diagnostico:   string;
    rec_alergias:      string;
    rec_sat:           string;
    rec_ta:            string;
    rec_peso:          number | null;
    rec_dxtx:          string;
    rec_recomendacion: string;
    rec_temp:          number | null;
    rec_estatura:      number | null;
    rec_imc:           number | null;
    medicamentos:      Medicamento[];
}

export interface Medicamento {
    med_nombre:       string;
    med_presentacion: string;
    rm_dosis:         string;
    med_medicamento:  string;
}

export enum RecSexo {
    Femenino = "FEMENINO",
    Masculino = "MASCULINO",
}
