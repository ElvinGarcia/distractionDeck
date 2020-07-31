

// export class FetchRequest {
//          constructor(type = "POST", formData) {
//         this.type = type;
//         this.formData = formData;
        
//         let data = {
//          method: this.type,
//          headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           mode: "cors",
//           cache: "no-cache",
//           redirect: "follow",
//           referrer: "no-referrer",
//           credentials: 'include'
//          },
//          body: JSON.stringify(this.formData),
//         };
//          return data;
//         }

//         static send(url, header) {
//           return fetch(url, header)
//           .then((response) => {
//            return response.json();
//           });
            // .catch( (e) => { console.error(e.message, e.name);});
       }   
}



