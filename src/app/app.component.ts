import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly mockData = {
    clientId: 4050,
    clientName: '4050',
    parentClientId: null,
    volumeSplitsClientInformations: [
        {
            volumeSplitClientId: 0,
            categoryId: 1,
            categoryName: 'CULINARY',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 2,
            categoryName: 'CULINARY 23%',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 3,
            categoryName: 'DEO',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 4,
            categoryName: 'DRE',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 5,
            categoryName: 'HAIR',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 6,
            categoryName: 'HHC',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 7,
            categoryName: 'IC',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 8,
            categoryName: 'LAU',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 9,
            categoryName: 'MS',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 10,
            categoryName: 'ORAL',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 11,
            categoryName: 'PW',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 12,
            categoryName: 'SCC',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 13,
            categoryName: 'SNACKS',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 14,
            categoryName: 'TBB',
            hasVolumeSplit: false
        },
        {
            volumeSplitClientId: 0,
            categoryId: 15,
            categoryName: 'XMASS',
            hasVolumeSplit: false
        }
    ],
    childrens: [
        {
            clientId: 6994,
            clientName: 'Total National',
            parentClientId: 4050,
            volumeSplitsClientInformations: [
                {
                    volumeSplitClientId: 0,
                    categoryId: 1,
                    categoryName: 'CULINARY',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 2,
                    categoryName: 'CULINARY 23%',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 3,
                    categoryName: 'DEO',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 4,
                    categoryName: 'DRE',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 5,
                    categoryName: 'HAIR',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 6,
                    categoryName: 'HHC',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 7,
                    categoryName: 'IC',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 8,
                    categoryName: 'LAU',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 9,
                    categoryName: 'MS',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 10,
                    categoryName: 'ORAL',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 11,
                    categoryName: 'PW',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 12,
                    categoryName: 'SCC',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 13,
                    categoryName: 'SNACKS',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 14,
                    categoryName: 'TBB',
                    hasVolumeSplit: false
                },
                {
                    volumeSplitClientId: 0,
                    categoryId: 15,
                    categoryName: 'XMASS',
                    hasVolumeSplit: false
                }
            ],
            childrens: [
                {
                    clientId: 2877,
                    clientName: 'EL2 - Schwarz Group',
                    parentClientId: 6994,
                    volumeSplitsClientInformations: [
                        {
                            volumeSplitClientId: 0,
                            categoryId: 1,
                            categoryName: 'CULINARY',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 2,
                            categoryName: 'CULINARY 23%',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 3,
                            categoryName: 'DEO',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 4,
                            categoryName: 'DRE',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 5,
                            categoryName: 'HAIR',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 6,
                            categoryName: 'HHC',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 7,
                            categoryName: 'IC',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 8,
                            categoryName: 'LAU',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 9,
                            categoryName: 'MS',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 10,
                            categoryName: 'ORAL',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 11,
                            categoryName: 'PW',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 12,
                            categoryName: 'SCC',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 13,
                            categoryName: 'SNACKS',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 14,
                            categoryName: 'TBB',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 15,
                            categoryName: 'XMASS',
                            hasVolumeSplit: false
                        }
                    ],
                    childrens: [
                        {
                            clientId: 10127864,
                            clientName: 'EL3 - Kaufland',
                            parentClientId: 2877,
                            volumeSplitsClientInformations: [
                                {
                                    volumeSplitClientId: 52,
                                    categoryId: 1,
                                    categoryName: 'CULINARY',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 2,
                                    categoryName: 'CULINARY 23%',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 45,
                                    categoryId: 3,
                                    categoryName: 'DEO',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 4,
                                    categoryName: 'DRE',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 47,
                                    categoryId: 5,
                                    categoryName: 'HAIR',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 6,
                                    categoryName: 'HHC',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 49,
                                    categoryId: 7,
                                    categoryName: 'IC',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 8,
                                    categoryName: 'LAU',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 55,
                                    categoryId: 9,
                                    categoryName: 'MS',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 51,
                                    categoryId: 10,
                                    categoryName: 'ORAL',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 56,
                                    categoryId: 11,
                                    categoryName: 'PW',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 54,
                                    categoryId: 12,
                                    categoryName: 'SCC',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 53,
                                    categoryId: 13,
                                    categoryName: 'SNACKS',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 57,
                                    categoryId: 14,
                                    categoryName: 'TBB',
                                    hasVolumeSplit: true
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 15,
                                    categoryName: 'XMASS',
                                    hasVolumeSplit: false
                                }
                            ],
                            childrens: null
                        }
                    ]
                },
                {
                    clientId: 8714,
                    clientName: 'EL2 - OTHERS',
                    parentClientId: 6994,
                    volumeSplitsClientInformations: [
                        {
                            volumeSplitClientId: 0,
                            categoryId: 1,
                            categoryName: 'CULINARY',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 2,
                            categoryName: 'CULINARY 23%',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 3,
                            categoryName: 'DEO',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 4,
                            categoryName: 'DRE',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 5,
                            categoryName: 'HAIR',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 6,
                            categoryName: 'HHC',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 7,
                            categoryName: 'IC',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 8,
                            categoryName: 'LAU',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 9,
                            categoryName: 'MS',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 10,
                            categoryName: 'ORAL',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 11,
                            categoryName: 'PW',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 12,
                            categoryName: 'SCC',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 13,
                            categoryName: 'SNACKS',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 14,
                            categoryName: 'TBB',
                            hasVolumeSplit: false
                        },
                        {
                            volumeSplitClientId: 0,
                            categoryId: 15,
                            categoryName: 'XMASS',
                            hasVolumeSplit: false
                        }
                    ],
                    childrens: [
                        {
                            clientId: 10335207,
                            clientName: 'EL3 - Other KA',
                            parentClientId: 8714,
                            volumeSplitsClientInformations: [
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 1,
                                    categoryName: 'CULINARY',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 2,
                                    categoryName: 'CULINARY 23%',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 3,
                                    categoryName: 'DEO',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 4,
                                    categoryName: 'DRE',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 5,
                                    categoryName: 'HAIR',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 6,
                                    categoryName: 'HHC',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 7,
                                    categoryName: 'IC',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 8,
                                    categoryName: 'LAU',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 9,
                                    categoryName: 'MS',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 10,
                                    categoryName: 'ORAL',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 11,
                                    categoryName: 'PW',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 12,
                                    categoryName: 'SCC',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 13,
                                    categoryName: 'SNACKS',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 14,
                                    categoryName: 'TBB',
                                    hasVolumeSplit: false
                                },
                                {
                                    volumeSplitClientId: 0,
                                    categoryId: 15,
                                    categoryName: 'XMASS',
                                    hasVolumeSplit: false
                                }
                            ],
                            childrens: [
                                {
                                    clientId: 10174492,
                                    clientName: 'PL4: PETROL STATIONS',
                                    parentClientId: 10335207,
                                    volumeSplitsClientInformations: [
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 1,
                                            categoryName: 'CULINARY',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 2,
                                            categoryName: 'CULINARY 23%',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 3,
                                            categoryName: 'DEO',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 4,
                                            categoryName: 'DRE',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 5,
                                            categoryName: 'HAIR',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 6,
                                            categoryName: 'HHC',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 7,
                                            categoryName: 'IC',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 8,
                                            categoryName: 'LAU',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 9,
                                            categoryName: 'MS',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 10,
                                            categoryName: 'ORAL',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 11,
                                            categoryName: 'PW',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 12,
                                            categoryName: 'SCC',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 13,
                                            categoryName: 'SNACKS',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 14,
                                            categoryName: 'TBB',
                                            hasVolumeSplit: false
                                        },
                                        {
                                            volumeSplitClientId: 0,
                                            categoryId: 15,
                                            categoryName: 'XMASS',
                                            hasVolumeSplit: false
                                        }
                                    ],
                                    childrens: [
                                        {
                                            clientId: 10174734,
                                            clientName: 'PL5: PETROL STATIONS',
                                            parentClientId: 10174492,
                                            volumeSplitsClientInformations: [
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 1,
                                                    categoryName: 'CULINARY',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 2,
                                                    categoryName: 'CULINARY 23%',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 3,
                                                    categoryName: 'DEO',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 4,
                                                    categoryName: 'DRE',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 5,
                                                    categoryName: 'HAIR',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 6,
                                                    categoryName: 'HHC',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 7,
                                                    categoryName: 'IC',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 8,
                                                    categoryName: 'LAU',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 9,
                                                    categoryName: 'MS',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 10,
                                                    categoryName: 'ORAL',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 11,
                                                    categoryName: 'PW',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 12,
                                                    categoryName: 'SCC',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 13,
                                                    categoryName: 'SNACKS',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 14,
                                                    categoryName: 'TBB',
                                                    hasVolumeSplit: false
                                                },
                                                {
                                                    volumeSplitClientId: 0,
                                                    categoryId: 15,
                                                    categoryName: 'XMASS',
                                                    hasVolumeSplit: false
                                                }
                                            ],
                                            childrens: [
                                                {
                                                    clientId: 10175008,
                                                    clientName: 'PL6: CIRCLE K',
                                                    parentClientId: 10174734,
                                                    volumeSplitsClientInformations: [
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 1,
                                                            categoryName: 'CULINARY',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 2,
                                                            categoryName: 'CULINARY 23%',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 3,
                                                            categoryName: 'DEO',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 4,
                                                            categoryName: 'DRE',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 5,
                                                            categoryName: 'HAIR',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 6,
                                                            categoryName: 'HHC',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 7,
                                                            categoryName: 'IC',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 8,
                                                            categoryName: 'LAU',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 9,
                                                            categoryName: 'MS',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 10,
                                                            categoryName: 'ORAL',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 11,
                                                            categoryName: 'PW',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 12,
                                                            categoryName: 'SCC',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 13,
                                                            categoryName: 'SNACKS',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 14,
                                                            categoryName: 'TBB',
                                                            hasVolumeSplit: false
                                                        },
                                                        {
                                                            volumeSplitClientId: 0,
                                                            categoryId: 15,
                                                            categoryName: 'XMASS',
                                                            hasVolumeSplit: false
                                                        }
                                                    ],
                                                    childrens: [
                                                        {
                                                            clientId: 10175581,
                                                            clientName: 'PL7: CIRCLE K',
                                                            parentClientId: 10175008,
                                                            volumeSplitsClientInformations: [
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 1,
                                                                    categoryName: 'CULINARY',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 2,
                                                                    categoryName: 'CULINARY 23%',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 3,
                                                                    categoryName: 'DEO',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 4,
                                                                    categoryName: 'DRE',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 5,
                                                                    categoryName: 'HAIR',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 6,
                                                                    categoryName: 'HHC',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 7,
                                                                    categoryName: 'IC',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 8,
                                                                    categoryName: 'LAU',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 9,
                                                                    categoryName: 'MS',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 10,
                                                                    categoryName: 'ORAL',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 11,
                                                                    categoryName: 'PW',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 12,
                                                                    categoryName: 'SCC',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 13,
                                                                    categoryName: 'SNACKS',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 14,
                                                                    categoryName: 'TBB',
                                                                    hasVolumeSplit: false
                                                                },
                                                                {
                                                                    volumeSplitClientId: 0,
                                                                    categoryId: 15,
                                                                    categoryName: 'XMASS',
                                                                    hasVolumeSplit: false
                                                                }
                                                            ],
                                                            childrens: [
                                                                {
                                                                    clientId: 10252452,
                                                                    clientName: 'STACJA PALIW STATOIL 35076',
                                                                    parentClientId: 10175581,
                                                                    volumeSplitsClientInformations: [
                                                                        {
                                                                            volumeSplitClientId: 25,
                                                                            categoryId: 1,
                                                                            categoryName: 'CULINARY',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 0,
                                                                            categoryId: 2,
                                                                            categoryName: 'CULINARY 23%',
                                                                            hasVolumeSplit: false
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 0,
                                                                            categoryId: 3,
                                                                            categoryName: 'DEO',
                                                                            hasVolumeSplit: false
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 19,
                                                                            categoryId: 4,
                                                                            categoryName: 'DRE',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 20,
                                                                            categoryId: 5,
                                                                            categoryName: 'HAIR',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 21,
                                                                            categoryId: 6,
                                                                            categoryName: 'HHC',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 22,
                                                                            categoryId: 7,
                                                                            categoryName: 'IC',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 0,
                                                                            categoryId: 8,
                                                                            categoryName: 'LAU',
                                                                            hasVolumeSplit: false
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 28,
                                                                            categoryId: 9,
                                                                            categoryName: 'MS',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 24,
                                                                            categoryId: 10,
                                                                            categoryName: 'ORAL',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 29,
                                                                            categoryId: 11,
                                                                            categoryName: 'PW',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 27,
                                                                            categoryId: 12,
                                                                            categoryName: 'SCC',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 26,
                                                                            categoryId: 13,
                                                                            categoryName: 'SNACKS',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 30,
                                                                            categoryId: 14,
                                                                            categoryName: 'TBB',
                                                                            hasVolumeSplit: true
                                                                        },
                                                                        {
                                                                            volumeSplitClientId: 0,
                                                                            categoryId: 15,
                                                                            categoryName: 'XMASS',
                                                                            hasVolumeSplit: false
                                                                        }
                                                                    ],
                                                                    childrens: null
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
}
