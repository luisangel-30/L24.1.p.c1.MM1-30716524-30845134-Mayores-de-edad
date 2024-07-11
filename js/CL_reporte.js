export default class CL_reporte {
    constructor(){
        this.contpersonas = 0;
        this.contmayor = 0;

    }
    procesarpersonas(per) {
        this.contpersonas++;
        if(per.edad>=18)
            this.contmayor++;
    }
    devolverpersonas(){
        return this.contpersonas;
    }
    devolvermayor(){
        return this.contmayor;
    }
    porcentaje(){
        return (this.contmayor/this.contpersonas)*100;
    }
}