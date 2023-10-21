import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
    transform(value: string): string {

        if (!value) {
            return value;
        }

        //remover espaços da string
        return this.replaceAccents(value).replace(/\s/g, "").toLowerCase();
    }

     replaceAccents(str: string): string {
        // verificar se possui acentos ou caracteres especiais e substituir
        if (str.search(/[\xC0-\xFF]/g) > -1) {
          str = str
            .replace(/[\xC0-\xC5]/g, "A")
            .replace(/[\xC6]/g, "AE")
            .replace(/[\xC7]/g, "C")
            .replace(/[\xC8-\xCB]/g, "E")
            .replace(/[\xCC-\xCF]/g, "I")
            .replace(/[\xD0]/g, "D")
            .replace(/[\xD1]/g, "N")
            .replace(/[\xD2-\xD6\xD8]/g, "O")
            .replace(/[\xD9-\xDC]/g, "U")
            .replace(/[\xDD]/g, "Y")
            .replace(/[\xDE]/g, "P")
            .replace(/[\xE0-\xE5]/g, "a")
            .replace(/[\xE6]/g, "ae")
            .replace(/[\xE7]/g, "c")
            .replace(/[\xE8-\xEB]/g, "e")
            .replace(/[\xEC-\xEF]/g, "i")
            .replace(/[\xF1]/g, "n")
            .replace(/[\xF2-\xF6\xF8]/g, "o")
            .replace(/[\xF9-\xFC]/g, "u")
            .replace(/[\xFE]/g, "p")
            .replace(/[\xFD\xFF]/g, "y");
        }
      
        return str;
      }
}