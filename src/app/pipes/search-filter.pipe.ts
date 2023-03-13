import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../interfaces/recetario';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
    // return null;
//   }
  transform(list: Receta[], filterText: string): any {
    // return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
      
      if (!list) return [];
      
      if (!filterText) return list;
      
      filterText = filterText.toLocaleLowerCase();
      
      return list.filter((item) => {
          return item.rec_doctor.toLowerCase().includes(filterText) ||
              item.rec_folio.toLowerCase().includes(filterText) ||
              item.rec_fecha.toLowerCase().includes(filterText) ||
              item.rec_paciente.toLowerCase().includes(filterText) ||
              item.rec_edad.toLowerCase().includes(filterText) ||
              item.rec_sexo.toLowerCase().includes(filterText) ||
              item.rec_diagnostico.toLowerCase().includes(filterText);
      });
  }
}