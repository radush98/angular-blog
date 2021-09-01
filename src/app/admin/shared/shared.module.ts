import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { QuillModule } from "ngx-quill";
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    imports: [
        HttpClientModule,
        QuillModule.forRoot()],
    exports: [
        HttpClientModule,
        QuillModule],
    declarations: [

    ]
})

export class SharedModule {

}