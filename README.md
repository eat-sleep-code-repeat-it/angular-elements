# Angular Elements

- https://buddy.works/tutorials/building-web-components-with-angular

```bash
npm install @angular/cli@13.2.3
ng new element-demo --prefix custom

cd element-demo
ng add @angular/elements



ng build --prod --output-hashing none
npm install http-server -g

cd elements
http-server

http://127.0.0.1:8080/index.html
```