export interface CompanyResponse{
    id: string,
    owner:{
        id: string,
        name: string,
        surname: string
    }
    companyName: string,
    companyDescription: string,
    imageUrl: string,
    users: [
        {
            id: string,
            name: string,
            surname: string
        }
    ],
    pendingUsers:[
        {
            id: string,
            name: string,
            surname: string
        }
    ]
}