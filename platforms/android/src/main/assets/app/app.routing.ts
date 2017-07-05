import { WelkomComponent } from "./components/welkom/welkom.component";
import { FaqComponent } from "./components/faq/faq.component";
import { ScanComponent } from "./components/scan/scan.component";
import { BevestigingComponent } from "./components/bevestiging/bevestiging.component";
import { GegevensComponent } from "./components/gegevens/gegevens.component";
import { OverzichtComponent } from "./components/overzicht/overzicht.component";
import { BedanktComponent } from "./components/bedankt/bedankt.component";

export const AppRoutes: any = [
    { path: "", component: WelkomComponent },
    { path: "retry", component: WelkomComponent },
    { path: "faq", component: FaqComponent },
    { path: "scan", component: ScanComponent },
    { path: "bevestiging", component: BevestigingComponent },
    { path: "gegevens", component: GegevensComponent },
    { path: "overzicht", component: OverzichtComponent },
    { path: "bedankt", component: BedanktComponent }
];

export const AppComponents: any = [
    WelkomComponent,
    FaqComponent,
    ScanComponent,
    BevestigingComponent,
    GegevensComponent,
    OverzichtComponent,
    BedanktComponent
];
