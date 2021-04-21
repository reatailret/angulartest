import { TranslocoRootModule } from './../transloco/transloco-root.module';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CollegeComponent } from './college/college.component';
import { COLLEGE_ABOUT$ } from './about.providers';
import { CollegeService } from './college.service';


@NgModule({
    declarations: [CollegeComponent],
    imports: [CommonModule, AboutRoutingModule,TranslocoModule],
    providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'about' },
    { provide: COLLEGE_ABOUT$, useFactory: getCollege, deps: [CollegeService] }
    ]
})
export class AboutModule
{
}
export function getCollege(srv: CollegeService)
{
    return srv.getCollege();

}
