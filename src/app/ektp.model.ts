export interface Content {
    RESPON: string;
    EKTP_STATUS: string;
    DUSUN: string;
    NAMA_LGKP: string;
    STAT_HBKEL: string;
    AGAMA: string;
    EKTP_CREATED: Date;
    JENIS_PKRJN: string;
    PDDK_AKH: string;
    TMPT_LHR: string;
    STATUS_KAWIN: string;
    GOL_DARAH: string;
    JENIS_KLMIN: string;
    NO_KK: number;
    NIK: number;
    KAB_NAME: string;
    NAMA_LGKP_AYAH: string;
    NO_RW: number;
    KEC_NAME: string;
    NO_KEL: number;
    NO_RT: number;
    KODE_POS: number;
    NO_KEC: number;
    ALAMAT: string;
    NO_PROP: number;
    NAMA_LGKP_IBU: string;
    PROP_NAME: string;
    NO_KAB: number;
    TGL_LHR: Date;
    KEL_N: string;
}

export interface ResponDukcapil {
    content: Content[];
    lastPage: boolean;
    numberOfElements: number;
    sort?: any;
    totalElements: number;
    firstPage: boolean;
    number: number;
    size: number;
}
