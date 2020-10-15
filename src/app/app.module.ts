import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { ApiHttpInterceptor } from './services/api-http.interceptor';

// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
