import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchByTitlePipe'
})

export class SearchByTitleUsingPipe implements PipeTransform {
    transform(listOfData: any, searchTitle: any): any {

        if(!listOfData) return [];

        if(!searchTitle) return listOfData;

        let getSearchLists = listOfData.filter(listIS => {
            return listIS.title.toLowerCase().includes(searchTitle);
        })

        return getSearchLists;
    }
}