import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, firstName: 'Thomas', lastName: 'Manuel', email: 'test123@gmail.com', password: 'welcome',
        bio: 'I am a musician and a professor.', role: 'Admin', image: 'user-1.jpg'},
        { id: 12, firstName: 'many', lastName: 'eue', email: 'test456@gmail.com', password: 'welcome',
        bio: 'I am a volunteer.', role: 'staff', image: 'user-2.jpg'},
    ];
    const menu = [
      { id: 1, title: 'home', link: '/home'},
      { id: 2, title: 'blog', link: '/blog'},
      { id: 3, title: 'forstaff', link: '/forstaff'},
    ];
    const posts = [
        {id: 1, title: 'Music Score 1', author: 'Qin Quan Lin', publishdate: '2018-06-19T07:22Z'},
        {id: 2, title: 'Music Score 2', author: 'Amber Li', publishdate: '2018-06-19T07:22Z'},
        {id: 3, title: 'Music Score 3', author: 'Young Seok', publishdate: '2018-06-19T07:22Z'},
        {id: 4, title: 'Music Score 4', author: 'Tom Tommy', publishdate: '2018-06-19T07:22Z'},
        {id: 5, title: 'Music Score 5', author: 'Prof', publishdate: '2018-06-19T07:22Z'},
        {id: 6, title: 'Music Score 6', author: 'Quan Lin', publishdate: '2018-06-19T07:22Z'},
        {id: 7, title: 'Music Score 7', author: 'Lin Quan', publishdate: '2018-06-19T07:22Z'},
        {id: 8, title: 'Music Score 8', author: 'Lin Qin Quan', publishdate: '2018-06-19T07:22Z'},
        {id: 9, title: 'Music Score 9', author: 'Quan Lin Quan', publishdate: '2018-06-19T07:22Z'},
        {id: 10, title: 'Music Score 10', author: 'Quan Lin', publishdate: '2018-06-19T07:22Z'},
        {id: 11, title: 'Music Score 11', author: 'Lin Lin Qin', publishdate: '2018-06-19T07:22Z'},
      ];

    return {users, posts, menu};
  };

  //override the default get method as the default can be getting post, user etc.
  get(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'posts') {
      return this.getArticle(reqInfo);
    }
    return undefined; //if it's undefined, it automatically passed to default get method
  }

  getArticle(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const collection = reqInfo.collection;
      const id = reqInfo.id; 
      // if id, return one post. Otherwise no id, return entire collection as an array. 
      const data = id === undefined ? collection: reqInfo.utils.findById(collection, id);

      const options: ResponseOptions = data ? 
      {
        body: dataEncapsulation ? { data } : data,
        status: 200
      } :
      {
        body: { error: 'Post not found' },
        status: 404
      };

      options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
      options.headers = reqInfo.headers;
      options.url = reqInfo.url;
      return options;

    });
  }

  getToken(user) {
    return 'this is a token';
  }
// override the default post method
  post(reqInfo: RequestInfo) {
    if (reqInfo.id === 'login') {
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find( usr=> {
          return reqInfo.req['body'].email === usr.email && reqInfo.req['body'].password
        })

        let responseBody: any = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            image: users.image,
            role: users.role,
            bio: users.bio,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email;'${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;

      });
      
    } else if(reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log('from signup');
    }
  };

  // Overrides the genId method to ensure that a hero always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // hero id + 1.
}