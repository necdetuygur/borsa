import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BistService {
  public Data = [
    {
      Code: 'AVOD',
      Title: 'A.V.O.D. KURUTULMUŞ GIDA VE TARIM ÜRÜNLERİ SANAYİ TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'A1CAP, ACP',
      Title: 'A1 CAPITAL YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ACSEL',
      Title: 'ACISELSAN ACIPAYAM SELÜLOZ SANAYİ VE TİCARET A.Ş.',
      City: 'DENİZLİ',
    },
    {
      Code: 'ADEL',
      Title: 'ADEL KALEMCİLİK TİCARET VE SANAYİ A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'ADESE',
      Title: 'ADESE GAYRİMENKUL YATIRIM A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'AFYON',
      Title: 'AFYON ÇİMENTO SANAYİ T.A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AGHOL',
      Title: 'AG ANADOLU GRUBU HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AGESA',
      Title: 'AGESA HAYAT VE EMEKLİLİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AHGAZ',
      Title: 'AHLATCI DOĞAL GAZ DAĞITIM ENERJİ VE YATIRIM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKSFA',
      Title: 'AK FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKFK',
      Title: 'AK FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKM, AKMEN',
      Title: 'AK YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKBNK',
      Title: 'AKBANK T.A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKCNS',
      Title: 'AKÇANSA ÇİMENTO SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKDFA',
      Title: 'AKDENİZ FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKYHO',
      Title: 'AKDENİZ YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKENR',
      Title: 'AKENERJİ ELEKTRİK ÜRETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKFGY',
      Title: 'AKFEN GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKFEN',
      Title: 'AKFEN HOLDİNG A.Ş.',
    },
    {
      Code: 'ATEKS',
      Title: 'AKIN TEKSTİL A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKSGY',
      Title: 'AKİŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKMGY',
      Title: 'AKMERKEZ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKSA',
      Title: 'AKSA AKRİLİK KİMYA SANAYİİ A.Ş.',
      City: 'YALOVA',
    },
    {
      Code: 'AKSEN',
      Title: 'AKSA ENERJİ ÜRETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKGRT',
      Title: 'AKSİGORTA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AKSUE',
      Title: 'AKSU ENERJİ VE TİCARET A.Ş.',
      City: 'ISPARTA',
    },
    {
      Code: 'AKTVK',
      Title: 'AKTİF BANK SUKUK VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AFB, AKTIF',
      Title: 'AKTİF YATIRIM BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALCAR',
      Title: 'ALARKO CARRIER SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALGYO',
      Title: 'ALARKO GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALARK',
      Title: 'ALARKO HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALBMD, ALM',
      Title: 'ALB YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALBRK, ALK',
      Title: 'ALBARAKA TÜRK KATILIM BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALCTL',
      Title: 'ALCATEL LUCENT TELETAŞ TELEKOMÜNİKASYON A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALFAS',
      Title: 'ALFA SOLAR ENERJİ SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ALJF',
      Title: 'ALJ FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALKIM',
      Title: 'ALKİM ALKALİ KİMYA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ALKA',
      Title: 'ALKİM KAĞIT SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'ALNTF, ANF',
      Title: 'ALTERNATİFBANK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AYCES',
      Title: 'ALTIN YUNUS ÇEŞME TURİSTİK TESİSLER A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'ALMAD',
      Title: 'ALTINYAĞ MADENCİLİK VE ENERJİ YATIRIMLARI SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'ANSGR',
      Title: 'ANADOLU ANONİM TÜRK SİGORTA ŞİRKETİ',
      City: 'İSTANBUL',
    },
    {
      Code: 'AEFES',
      Title: 'ANADOLU EFES BİRACILIK VE MALT SANAYİİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ANHYT',
      Title: 'ANADOLU HAYAT EMEKLİLİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ASUZU',
      Title: 'ANADOLU ISUZU OTOMOTİV SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ANGEN',
      Title:
        'ANATOLİA TANI VE BİYOTEKNOLOJİ ÜRÜNLERİ ARAŞTIRMA GELİŞTİRME SANAYİ VE TİCARET A.Ş.',
    },
    {
      Code: 'ANELE',
      Title: 'ANEL ELEKTRİK PROJE TAAHHÜT VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ARCLK',
      Title: 'ARÇELİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ARDYZ',
      Title: 'ARD GRUP BİLİŞİM TEKNOLOJİLERİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ARENA',
      Title: 'ARENA BİLGİSAYAR SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ARNFK',
      Title: 'ARENA FİNANS FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ARMDA',
      Title: 'ARMADA BİLGİSAYAR SİSTEMLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ARSAN',
      Title: 'ARSAN TEKSTİL TİCARET VE SANAYİ A.Ş.',
      City: 'KAHRAMANMARAŞ',
    },
    {
      Code: 'ARZUM',
      Title: 'ARZUM ELEKTRİKLİ EV ALETLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ASELS',
      Title: 'ASELSAN ELEKTRONİK SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ASTOR',
      Title: 'ASTOR ENERJİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ATAGY',
      Title: 'ATA GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ATA, ATAYM',
      Title: 'ATA YATIRIM MENKUL KIYMETLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AGYO',
      Title: 'ATAKULE GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ATLFA',
      Title: 'ATILIM FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ATSYH',
      Title: 'ATLANTİS YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ATLAS',
      Title: 'ATLAS MENKUL KIYMETLER YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ATATP',
      Title:
        'ATP TİCARİ BİLGİSAYAR AĞI VE ELEKTRİK GÜÇ KAYNAKLARI ÜRETİM PAZARLAMA VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AVGYO',
      Title: 'AVRASYA GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AVTUR',
      Title: 'AVRASYA PETROL VE TURİSTİK TESİSLER YATIRIMLAR A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AVHOL',
      Title: 'AVRUPA YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AYDEM',
      Title: 'AYDEM YENİLENEBİLİR ENERJİ A.Ş.',
      City: 'DENİZLİ',
    },
    {
      Code: 'AYEN',
      Title: 'AYEN ENERJİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'AYES',
      Title: 'AYES ÇELİK HASIR VE ÇİT SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AYGAZ',
      Title: 'AYGAZ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'AZTEK',
      Title: 'AZTEK TEKNOLOJİ ÜRÜNLERİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BAGFS',
      Title: 'BAGFAŞ BANDIRMA GÜBRE FABRİKALARI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BAKAB',
      Title: 'BAK AMBALAJ SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'BALAT',
      Title: 'BALATACILAR BALATACILIK SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'BNTAS',
      Title: 'BANTAŞ BANDIRMA AMBALAJ SANAYİ TİCARET A.Ş.',
      City: 'BALIKESİR',
    },
    {
      Code: 'BANVT',
      Title: 'BANVİT BANDIRMA VİTAMİNLİ YEM SANAYİİ A.Ş.',
      City: 'BALIKESİR',
    },
    {
      Code: 'BARMA',
      Title: 'BAREM AMBALAJ SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'BASGZ',
      Title: 'BAŞKENT DOĞALGAZ DAĞITIM GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'BASCM',
      Title: 'BAŞTAŞ BAŞKENT ÇİMENTO SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'BTCIM',
      Title: 'BATIÇİM BATI ANADOLU ÇİMENTO SANAYİİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'BSOKE',
      Title: 'BATISÖKE SÖKE ÇİMENTO SANAYİİ T.A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'BAYRK',
      Title: 'BAYRAK EBT TABAN SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BERA',
      Title: 'BERA HOLDİNG A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'BRKT',
      Title: 'BEREKET VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BRKSN',
      Title: 'BERKOSAN YALITIM VE TECRİT MADDELERİ ÜRETİM VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BJKAS',
      Title: 'BEŞİKTAŞ FUTBOL YATIRIMLARI SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BEYAZ',
      Title: 'BEYAZ FİLO OTO KİRALAMA A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'BIENF',
      Title: 'BİEN FİNANS FAKTORİNG A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'BLCYT',
      Title: 'BİLİCİ YATIRIM SANAYİ VE TİCARET A.Ş.',
      City: 'ADANA',
    },
    {
      Code: 'BLKOM',
      Title: 'BİLKOM BİLİŞİM HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BIMAS',
      Title: 'BİM BİRLEŞİK MAĞAZALAR A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BIOEN',
      Title: 'BİOTREND ÇEVRE VE ENERJİ YATIRIMLARI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BRKVY',
      Title: 'BİRİKİM VARLIK YÖNETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BRKO',
      Title: 'BİRKO BİRLEŞİK KOYUNLULULAR MENSUCAT TİCARET VE SANAYİ A.Ş.',
      City: 'NİĞDE',
    },
    {
      Code: 'BRLSM',
      Title:
        'BİRLEŞİM MÜHENDİSLİK ISITMA SOĞUTMA HAVALANDIRMA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BRMEN',
      Title: 'BİRLİK MENSUCAT TİCARET VE SANAYİ İŞLETMESİ A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'BIZIM',
      Title: 'BİZİM TOPTAN SATIŞ MAĞAZALARI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BMSTL',
      Title: 'BMS BİRLEŞİK METAL SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BMSCH',
      Title: 'BMS ÇELİK HASIR SANAYİ VE TİCARET A.Ş.',
      City: 'MANİSA',
    },
    {
      Code: 'BNPFK',
      Title: 'BNP PARİBAS FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BOBET',
      Title: 'BOĞAZİÇİ BETON SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BRSAN',
      Title: 'BORUSAN MANNESMANN BORU SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BRYAT',
      Title: 'BORUSAN YATIRIM VE PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BFREN',
      Title: 'BOSCH FREN SİSTEMLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'BOSSA',
      Title: 'BOSSA TİCARET VE SANAYİ İŞLETMELERİ T.A.Ş.',
      City: 'ADANA',
    },
    {
      Code: 'BRISA',
      Title: 'BRİSA BRIDGESTONE SABANCI LASTİK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'BURCE',
      Title: 'BURÇELİK BURSA ÇELİK DÖKÜM SANAYİİ A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'BURVA',
      Title: 'BURÇELİK VANA SANAYİ VE TİCARET A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'BUCIM',
      Title: 'BURSA ÇİMENTO FABRİKASI A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'BVSAN',
      Title: 'BÜLBÜLOĞLU VİNÇ SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'CRFSA',
      Title: 'CARREFOURSA CARREFOUR SABANCI TİCARET MERKEZİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CASA',
      Title: 'CASA EMTİA PETROL KİMYEVİ VE TÜREVLERİ SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CEOEM',
      Title: 'CEO EVENT MEDYA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CREAN',
      Title: 'CEREAN ENERJİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CCOLA',
      Title: 'COCA-COLA İÇECEK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CONSE',
      Title: 'CONSUS ENERJİ İŞLETMECİLİĞİ VE HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'COSMO',
      Title: 'COSMOS YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CRDFA',
      Title: 'CREDITWEST FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CAGFA',
      Title: 'ÇAĞDAŞ FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CLDNM',
      Title: 'ÇALIK DENİM TEKSTİL SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CLKEN',
      Title: 'ÇALIK ENERJİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CANTE',
      Title: 'ÇAN2 TERMİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CLEBI',
      Title: 'ÇELEBİ HAVA SERVİSİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CELHA',
      Title: 'ÇELİK HALAT VE TEL SANAYİİ A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'CEMAS',
      Title: 'ÇEMAŞ DÖKÜM SANAYİ A.Ş.',
      City: 'KIRŞEHİR',
    },
    {
      Code: 'CEMTS',
      Title: 'ÇEMTAŞ ÇELİK MAKİNA SANAYİ VE TİCARET A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'CMBTN',
      Title:
        'ÇİMBETON HAZIRBETON VE PREFABRİK YAPI ELEMANLARI SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'CMENT',
      Title: 'ÇİMENTAŞ İZMİR ÇİMENTO FABRİKASI T.A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'CIMSA',
      Title: 'ÇİMSA ÇİMENTO SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'CUSAN',
      Title: 'ÇUHADAROĞLU METAL SANAYİ VE PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DYBNK',
      Title: 'D YATIRIM BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DAGI',
      Title: 'DAGİ GİYİM SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DAGHL',
      Title: 'DAGİ YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DAPGM',
      Title: 'DAP GAYRİMENKUL GELİŞTİRME A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DARDL',
      Title: 'DARDANEL ÖNENTAŞ GIDA SANAYİ A.Ş.',
      City: 'ÇANAKKALE',
    },
    {
      Code: 'DGATE',
      Title: 'DATAGATE BİLGİSAYAR MALZEMELERİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DGRVK',
      Title: 'DEĞER VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DMSAS',
      Title: 'DEMİSAŞ DÖKÜM EMAYE MAMÜLLERİ SANAYİ A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'DENGE',
      Title: 'DENGE YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DENFA',
      Title: 'DENİZ FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DNFIN',
      Title: 'DENİZ FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DZGYO',
      Title: 'DENİZ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DZY, DZYMK',
      Title: 'DENİZ YATIRIM MENKUL KIYMETLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DENIZ, DNZ',
      Title: 'DENİZBANK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DERIM',
      Title: 'DERİMOD KONFEKSİYON AYAKKABI DERİ SANAYİ VE TİCARET A.Ş.',
      City: 'TEKİRDAĞ',
    },
    {
      Code: 'DERHL',
      Title: 'DERLÜKS YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DESA',
      Title: 'DESA DERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DESPC',
      Title: 'DESPEC BİLGİSAYAR PAZARLAMA VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DTYGD',
      Title: 'DETAY GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DEVA',
      Title: 'DEVA HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DNISI',
      Title: 'DİNAMİK ISI MAKİNA YALITIM MALZEMELERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'DIRIT',
      Title: 'DİRİTEKS DİRİLİŞ TEKSTİL SANAYİ VE TİCARET A.Ş.',
      City: 'ISPARTA',
    },
    {
      Code: 'DITAS',
      Title: 'DİTAŞ DOĞAN YEDEK PARÇA İMALAT VE TEKNİK A.Ş.',
      City: 'NİĞDE',
    },
    {
      Code: 'DOCO',
      Title: 'DO & CO AKTIENGESELLSCHAFT',
    },
    {
      Code: 'DOBUR',
      Title: 'DOĞAN BURDA DERGİ YAYINCILIK VE PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DDTCR',
      Title: 'DOĞAN DIŞ TİCARET VE MÜMESSİLLİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DOHOL',
      Title: 'DOĞAN ŞİRKETLER GRUBU HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DTRND',
      Title: 'DOĞAN TREND OTOMOTİV TİCARET HİZMET VE TEKNOLOJİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DGNMO',
      Title: 'DOĞANLAR MOBİLYA GRUBU İMALAT SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ARASE',
      Title: 'DOĞU ARAS ENERJİ YATIRIMLARI A.Ş.',
      City: 'ERZURUM',
    },
    {
      Code: 'DOGUB',
      Title: 'DOĞUSAN BORU SANAYİİ VE TİCARET A.Ş.',
      City: 'ERZİNCAN',
    },
    {
      Code: 'DGGYO',
      Title: 'DOĞUŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DOAS',
      Title: 'DOĞUŞ OTOMOTİV SERVİS VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DFKTR',
      Title: 'DORUK FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DOKTA',
      Title: 'DÖKTAŞ DÖKÜMCÜLÜK TİCARET VE SANAYİ A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'DURDO',
      Title: 'DURAN DOĞAN BASIM VE AMBALAJ SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DNYVA',
      Title: 'DÜNYA VARLIK YÖNETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DYOBY',
      Title: 'DYO BOYA FABRİKALARI SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EDATA',
      Title: 'E-DATA TEKNOLOJİ PAZARLAMA A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ECZYT',
      Title: 'ECZACIBAŞI YATIRIM HOLDİNG ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EDIP',
      Title: 'EDİP GAYRİMENKUL YATIRIM SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EGEEN',
      Title: 'EGE ENDÜSTRİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EGGUB',
      Title: 'EGE GÜBRE SANAYİİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EGPRO',
      Title: 'EGE PROFİL TİCARET VE SANAYİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EGSER',
      Title: 'EGE SERAMİK SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EPLAS',
      Title: 'EGEPLAST EGE PLASTİK TİCARET VE SANAYİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'ECILC',
      Title:
        'EİS ECZACIBAŞI İLAÇ SINAİ VE FİNANSAL YATIRIMLAR SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EKIZ',
      Title: 'EKİZ KİMYA SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EKOFA',
      Title: 'EKO FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ELITE',
      Title: 'ELİTE NATUREL ORGANİK GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'EMKEL',
      Title: 'EMEK ELEKTRİK ENDÜSTRİSİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'EMNIS',
      Title: 'EMİNİŞ AMBALAJ SANAYİ VE TİCARET A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'EMIRV',
      Title: 'EMİR VARLIK YÖNETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EKTVK',
      Title: 'EMLAK KATILIM VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EKGYO',
      Title: 'EMLAK KONUT GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EMVAR',
      Title: 'EMLAK VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ENJSA',
      Title: 'ENERJİSA ENERJİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ENKAI',
      Title: 'ENKA İNŞAAT VE SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ENSRI',
      Title: 'ENSARİ DERİ GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ERBOS',
      Title: 'ERBOSAN ERCİYAS BORU SANAYİİ VE TİCARET A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'ERCB',
      Title: 'ERCİYAS ÇELİK BORU SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EREGL',
      Title: 'EREĞLİ DEMİR VE ÇELİK FABRİKALARI T.A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ERGLI',
      Title: 'EREĞLİ TEKSTİL TURİZM SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KIMMR',
      Title: 'ERSAN ALIŞVERİŞ HİZMETLERİ VE GIDA SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ERSU',
      Title: 'ERSU MEYVE VE GIDA SANAYİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ESCAR',
      Title: 'ESCAR FİLO KİRALAMA HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ESCOM',
      Title: 'ESCORT TEKNOLOJİ YATIRIM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ESEN',
      Title: 'ESENBOĞA ELEKTRİK ÜRETİM A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ETILR',
      Title: 'ETİLER GIDA VE TİCARİ YATIRIMLAR SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EUKYO',
      Title: 'EURO KAPİTAL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'EUYO',
      Title: 'EURO MENKUL KIYMET YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ETYAT',
      Title: 'EURO TREND YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'EUHOL',
      Title: 'EURO YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TEZOL',
      Title: 'EUROPAP TEZOL KAĞIT SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EUREN',
      Title: 'EUROPEN ENDÜSTRİ İNŞAAT SANAYİ VE TİCARET A.Ş.',
      City: 'ESKİŞEHİR',
    },
    {
      Code: 'EYGYO',
      Title: 'EYG GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FADE',
      Title: 'FADE GIDA YATIRIM SANAYİ TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'FSDAT',
      Title: 'FASDAT GIDA DAĞITIM SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FMIZP',
      Title: 'FEDERAL-MOGUL İZMİT PİSTON VE PİM ÜRETİM TESİSLERİ A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'FENER',
      Title: 'FENERBAHÇE FUTBOL A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FIBAF',
      Title: 'FİBA FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FBB, FBBNK',
      Title: 'FİBABANKA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FLAP',
      Title: 'FLAP KONGRE TOPLANTI HİZMETLERİ OTOMOTİV VE TURİZM A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'FONET',
      Title: 'FONET BİLGİ TEKNOLOJİLERİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'FROTO',
      Title: 'FORD OTOMOTİV SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FORMT',
      Title: 'FORMET METAL VE CAM SANAYİ A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'FRIGO',
      Title: 'FRİGO-PAK GIDA MADDELERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GWIND',
      Title: 'GALATA WIND ENERJİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GSRAY',
      Title: 'GALATASARAY SPORTİF SINAİ VE TİCARİ YATIRIMLAR A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GAPIN',
      Title: 'GAP İNŞAAT YATIRIM VE DIŞ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GARFA',
      Title: 'GARANTİ FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GARFL',
      Title: 'GARANTİ FİLO YÖNETİM HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GRFIN',
      Title: 'GARANTİ FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GRNYO',
      Title: 'GARANTİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GEDIK',
      Title: 'GEDİK YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GEDZA',
      Title: 'GEDİZ AMBALAJ SANAYİ VE TİCARET A.Ş.',
      City: 'KÜTAHYA',
    },
    {
      Code: 'GLCVY',
      Title: 'GELECEK VARLIK YÖNETİMİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GENIL',
      Title: 'GEN İLAÇ VE SAĞLIK ÜRÜNLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'GENTS',
      Title: 'GENTAŞ DEKORATİF YÜZEYLER SANAYİ VE TİCARET A.Ş.',
      City: 'BOLU',
    },
    {
      Code: 'GEREL',
      Title: 'GERSAN ELEKTRİK TİCARET VE SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GZNMI',
      Title: 'GEZİNOMİ SEYAHAT TURİZM TİCARET A.Ş.',
      City: 'ANTALYA',
    },
    {
      Code: 'GMTAS',
      Title: 'GİMAT MAĞAZACILIK SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'GESAN',
      Title: 'GİRİŞİM ELEKTRİK SANAYİ TAAHHÜT VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'GLB, GLBMD',
      Title: 'GLOBAL MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GLYHO',
      Title: 'GLOBAL YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GGBVK',
      Title: 'GOLDEN GLOBAL VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GSIPD',
      Title: 'GOLDMAN SACHS INTERNATIONAL',
    },
    {
      Code: 'GOODY',
      Title: 'GOODYEAR LASTİKLERİ T.A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GOKNR',
      Title:
        'GÖKNUR GIDA MADDELERİ ENERJİ İMALAT İTHALAT İHRACAT TİCARET VE SANAYİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'GOLTS',
      Title: 'GÖLTAŞ GÖLLER BÖLGESİ ÇİMENTO SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GOZDE',
      Title: 'GÖZDE GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GSDDE',
      Title: 'GSD DENİZCİLİK GAYRİMENKUL İNŞAAT SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GSDHO',
      Title: 'GSD HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GUBRF',
      Title: 'GÜBRE FABRİKALARI T.A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GLRYH',
      Title: 'GÜLER YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GRSEL',
      Title: 'GÜR-SEL TURİZM TAŞIMACILIK VE SERVİS TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SAHOL',
      Title: 'HACI ÖMER SABANCI HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HALKF',
      Title: 'HALK FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HLGYO',
      Title: 'HALK GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HLVKS',
      Title: 'HALK VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HALKI, HLY',
      Title: 'HALK YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HATEK',
      Title: 'HATEKS HATAY TEKSTİL İŞLETMELERİ A.Ş.',
      City: 'HATAY',
    },
    {
      Code: 'HDFFL',
      Title: 'HEDEF ARAÇ KİRALAMA VE SERVİS A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HDFGS',
      Title: 'HEDEF GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HEDEF',
      Title: 'HEDEF HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HEKTS',
      Title: 'HEKTAŞ TİCARET T.A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'HKTM',
      Title:
        'HİDROPAR HAREKET KONTROL TEKNOLOJİLERİ MERKEZİ SANAYİ VE TİCARET A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'HTTBT',
      Title: 'HİTİT BİLGİSAYAR HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HSB, HSBCB',
      Title: 'HSBC BANK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HUBVC',
      Title: 'HUB GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HUNER',
      Title: 'HUN YENİLENEBİLİR ENERJİ ÜRETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HUZFA',
      Title: 'HUZUR FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HURGZ',
      Title: 'HÜRRİYET GAZETECİLİK VE MATBAACILIK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ICB, ICBCT',
      Title: 'ICBC TURKEY BANK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GIN, INGBN',
      Title: 'ING BANK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'INVEO',
      Title: 'INVEO YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'INVES',
      Title: 'INVESTCO HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISKPL',
      Title: 'IŞIK PLASTİK SANAYİ VE DIŞ TİCARET PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IEYHO',
      Title: 'IŞIKLAR ENERJİ VE YAPI HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IDEAS',
      Title: 'İDEAL FİNANSAL TEKNOLOJİLER VE DANIŞMANLIK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IDGYO',
      Title: 'İDEALİST GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IHEVA',
      Title: 'İHLAS EV ALETLERİ İMALAT SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IHLGM',
      Title: 'İHLAS GAYRİMENKUL PROJE GELİŞTİRME VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IHGZT',
      Title: 'İHLAS GAZETECİLİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IHAAS',
      Title: 'İHLAS HABER AJANSI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IHLAS',
      Title: 'İHLAS HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IHYAY',
      Title: 'İHLAS YAYIN HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IMASM',
      Title: 'İMAŞ MAKİNA SANAYİ A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'INALR',
      Title: 'İNALLAR OTOMOTİV SANAYİ VE TİCARET A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'INDES',
      Title: 'İNDEKS BİLGİSAYAR SİSTEMLERİ MÜHENDİSLİK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'INFO, IYF',
      Title: 'İNFO YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'INTEM',
      Title: 'İNTEMA İNŞAAT VE TESİSAT MALZEMELERİ YATIRIM VE PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IPEKE',
      Title: 'İPEK DOĞAL ENERJİ KAYNAKLARI ARAŞTIRMA VE ÜRETİM A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ISDMR',
      Title: 'İSKENDERUN DEMİR VE ÇELİK A.Ş.',
      City: 'HATAY',
    },
    {
      Code: 'ISFAK',
      Title: 'İŞ FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISFIN',
      Title: 'İŞ FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISGYO',
      Title: 'İŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISGSY',
      Title: 'İŞ GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISMEN, IYM',
      Title: 'İŞ YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISYAT',
      Title: 'İŞ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISBIR',
      Title: 'İŞBİR HOLDİNG A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ISSEN',
      Title: 'İŞBİR SENTETİK DOKUMA SANAYİ A.Ş.',
      City: 'BALIKESİR',
    },
    {
      Code: 'ITTFH',
      Title: 'İTTİFAK HOLDİNG A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'IZINV',
      Title: 'İZ YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'IZMDC',
      Title: 'İZMİR DEMİR ÇELİK SANAYİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'IZFAS',
      Title: 'İZMİR FIRÇA SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'JANTS',
      Title: 'JANTSA JANT SANAYİ VE TİCARET A.Ş.',
      City: 'AYDIN',
    },
    {
      Code: 'KFEIN',
      Title: 'KAFEİN YAZILIM HİZMETLERİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLKIM',
      Title: 'KALEKİM KİMYEVİ MADDELER SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLVKS',
      Title: 'KALKINMA YATIRIM VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KAPTESTAS001, TRAKAPTEST01',
      Title: 'KAP TEST A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'KAPLM',
      Title: 'KAPLAMİN AMBALAJ SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'KRDMA, KRDMB, KRDMD',
      Title: 'KARDEMİR KARABÜK DEMİR ÇELİK SANAYİ VE TİCARET A.Ş.',
      City: 'KARABÜK',
    },
    {
      Code: 'KAREL',
      Title: 'KAREL ELEKTRONİK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KARSN',
      Title: 'KARSAN OTOMOTİV SANAYİİ VE TİCARET A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'KRTEK',
      Title: 'KARSU TEKSTİL SANAYİİ VE TİCARET A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'KARYE',
      Title: 'KARTAL YENİLENEBİLİR ENERJİ ÜRETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KARTN',
      Title: 'KARTONSAN KARTON SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KATVK',
      Title: 'KATILIM VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KATMR',
      Title: 'KATMERCİLER ARAÇ ÜSTÜ EKİPMAN SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'KNTFA',
      Title: 'KENT FİNANS FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KENT',
      Title: 'KENT GIDA MADDELERİ SANAYİİ VE TİCARET A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'KERVT',
      Title: 'KEREVİTAŞ GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KRVGD',
      Title: 'KERVAN GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KERVN',
      Title: 'KERVANSARAY YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KZBGY',
      Title: 'KIZILBÜK GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLGYO',
      Title: 'KİLER GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLRHO',
      Title: 'KİLER HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KMPUR',
      Title: 'KİMTEKS POLİÜRETAN SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLMSN',
      Title: 'KLİMASAN KLİMA SANAYİ VE TİCARET A.Ş.',
      City: 'MANİSA',
    },
    {
      Code: 'KCAER',
      Title: 'KOCAER ÇELİK SANAYİ VE TİCARET A.Ş.',
      City: 'DENİZLİ',
    },
    {
      Code: 'KFKTF',
      Title: 'KOÇ FIAT KREDİ FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KOCFN',
      Title: 'KOÇ FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KCHOL',
      Title: 'KOÇ HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLSYN',
      Title: 'KOLEKSİYON MOBİLYA SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KNFRT',
      Title: 'KONFRUT GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KONTR',
      Title: 'KONTROLMATİK TEKNOLOJİ ENERJİ VE MÜHENDİSLİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KONYA',
      Title: 'KONYA ÇİMENTO SANAYİİ A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'KONKA',
      Title: 'KONYA KAĞIT SANAYİ VE TİCARET A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'KGYO',
      Title: 'KORAY GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KORDS',
      Title: 'KORDSA TEKNİK TEKSTİL A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'KRPLS',
      Title: 'KOROPLAST TEMİZLİK AMBALAJ ÜRÜNLERİ SANAYİ VE DIŞ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KORTS',
      Title: 'KORTEKS MENSUCAT SANAYİ VE TİCARET A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'KOZAL',
      Title: 'KOZA ALTIN İŞLETMELERİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'KOZAA',
      Title: 'KOZA ANADOLU METAL MADENCİLİK İŞLETMELERİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'KRGYO',
      Title: 'KÖRFEZ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KRSTL',
      Title: 'KRİSTAL KOLA VE MEŞRUBAT SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KRONT',
      Title: 'KRON TEKNOLOJİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KTKVK',
      Title: 'KT KİRA SERTİFİKALARI VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KSTUR',
      Title: 'KUŞTUR KUŞADASI TURİZM ENDÜSTRİ A.Ş.',
      City: 'AYDIN',
    },
    {
      Code: 'KUVVA',
      Title: 'KUVVA GIDA TİCARET VE SANAYİ YATIRIMLARI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KUYAS',
      Title: 'KUYAŞ YATIRIM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KUTPO',
      Title: 'KÜTAHYA PORSELEN SANAYİ A.Ş.',
      City: 'KÜTAHYA',
    },
    {
      Code: 'KTSKR',
      Title: 'KÜTAHYA ŞEKER FABRİKASI A.Ş.',
      City: 'KÜTAHYA',
    },
    {
      Code: 'LIDER',
      Title: 'LDR TURİZM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'LIDFA',
      Title: 'LİDER FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'LINK',
      Title:
        'LİNK BİLGİSAYAR SİSTEMLERİ YAZILIMI VE DONANIMI SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'LOGO',
      Title: 'LOGO YAZILIM SANAYİ VE TİCARET A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'LKMNH',
      Title:
        'LOKMAN HEKİM ENGÜRÜSAĞ SAĞLIK TURİZM EĞİTİM HİZMETLERİ VE İNŞAAT TAAHHÜT A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'LUKSK',
      Title: 'LÜKS KADİFE TİCARET VE SANAYİİ A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'MACKO',
      Title: 'MACKOLİK İNTERNET HİZMETLERİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MAKIM',
      Title: 'MAKİM MAKİNA TEKNOLOJİLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'MAKTK',
      Title: 'MAKİNA TAKIM ENDÜSTRİSİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MANAS',
      Title: 'MANAS ENERJİ YÖNETİMİ SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'MRBAS, MRS',
      Title: 'MARBAŞ MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MAGEN',
      Title: 'MARGÜN ENERJİ ÜRETİM SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'MARKA',
      Title: 'MARKA YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MAALT',
      Title: 'MARMARİS ALTINYUNUS TURİSTİK TESİSLER A.Ş.',
      City: 'ANTALYA',
    },
    {
      Code: 'MRSHL',
      Title: 'MARSHALL BOYA VE VERNİK SANAYİİ A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'MRGYO',
      Title: 'MARTI GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MARTI',
      Title: 'MARTI OTEL İŞLETMELERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MTRKS',
      Title: 'MATRİKS BİLGİ DAĞITIM HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MAVI',
      Title: 'MAVİ GİYİM SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MZHLD',
      Title: 'MAZHAR ZORLU HOLDİNG A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'MEDTR',
      Title: 'MEDİTERA TIBBİ MALZEME SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'MEGAP',
      Title: 'MEGA POLİETİLEN KÖPÜK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MEKMD, MSA',
      Title: 'MEKSA YATIRIM MENKUL DEĞERLER A.Ş.',
    },
    {
      Code: 'MNDRS',
      Title: 'MENDERES TEKSTİL SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'MEPET',
      Title: 'MEPET METRO PETROL VE TESİSLERİ SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MERCN',
      Title: 'MERCAN KİMYA SANAYİ VE TİCARET A.Ş.',
      City: 'DENİZLİ',
    },
    {
      Code: 'MBFTR',
      Title: 'MERCEDES-BENZ FİNANSMAN TÜRK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MERIT',
      Title: 'MERİT TURİZM YATIRIM VE İŞLETME A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MERKO',
      Title: 'MERKO GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'METUR',
      Title: 'METEMTUR YATIRIM ENERJİ TURİZM VE İNŞAAT A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'METRO',
      Title: 'METRO TİCARİ VE MALİ YATIRIMLAR HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MTRYO',
      Title: 'METRO YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MIATK',
      Title: 'MİA TEKNOLOJİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'MGROS',
      Title: 'MİGROS TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MIPAZ',
      Title: 'MİLPA TİCARİ VE SINAİ ÜRÜNLER PAZARLAMA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MSGYO',
      Title: 'MİSTRAL GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'MPARK',
      Title: 'MLP SAĞLIK HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MMCAS',
      Title: 'MMC SANAYİ VE TİCARİ YATIRIMLAR A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MOBTL',
      Title: 'MOBİLTEL İLETİŞİM HİZMETLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'MNDTR',
      Title: 'MONDİ TURKEY OLUKLU MUKAVVA KAĞIT VE AMBALAJ SANAYİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'EGEPO',
      Title: 'NASMED ÖZEL SAĞLIK HİZMETLERİ TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'NATEN',
      Title: 'NATUREL YENİLENEBİLİR ENERJİ TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'NTGAZ',
      Title: 'NATURELGAZ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'NTHOL',
      Title: 'NET HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'NETAS',
      Title: 'NETAŞ TELEKOMÜNİKASYON A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'NIBAS',
      Title: 'NİĞBAŞ NİĞDE BETON SANAYİ VE TİCARET A.Ş.',
      City: 'NİĞDE',
    },
    {
      Code: 'NUHCM',
      Title: 'NUH ÇİMENTO SANAYİ A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'NUGYO',
      Title: 'NUROL GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'NRHOL',
      Title: 'NUROL HOLDİNG A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'NRLIN',
      Title: 'NUROL İNŞAAT VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'NURVK',
      Title: 'NUROL VARLIK KİRALAMA A.Ş.',
    },
    {
      Code: 'NRBNK, NYB',
      Title: 'NUROL YATIRIM BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OBASE',
      Title: 'OBASE BİLGİSAYAR VE DANIŞMANLIK HİZMETLERİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ODAS',
      Title: 'ODAŞ ELEKTRİK ÜRETİM SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ONCSM',
      Title: 'ONCOSEM ONKOLOJİK SİSTEMLER SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'OPET',
      Title: 'OPET PETROLCÜLÜK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ORCAY',
      Title: 'ORÇAY ORTAKÖY ÇAY SANAYİ VE TİCARET A.Ş.',
      City: 'RİZE',
    },
    {
      Code: 'ORFIN',
      Title: 'ORFİN FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ORGE',
      Title: 'ORGE ENERJİ ELEKTRİK TAAHHÜT A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ORMA',
      Title: 'ORMA ORMAN MAHSULLERİ İNTEGRE SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OMD, OSMEN',
      Title: 'OSMANLI YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OSTIM',
      Title: 'OSTİM ENDÜSTRİYEL YATIRIMLAR VE İŞLETME A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'OTKAR',
      Title: 'OTOKAR OTOMOTİV VE SAVUNMA SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OTOKC',
      Title: 'OTOKOÇ OTOMOTİV TİCARET VE SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OTTO',
      Title: 'OTTO HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OYAKC',
      Title: 'OYAK ÇİMENTO FABRİKALARI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'OYA, OYYAT',
      Title: 'OYAK YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OYAYO',
      Title: 'OYAK YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OYLUM',
      Title: 'OYLUM SINAİ YATIRIMLAR A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'OZKGY',
      Title: 'ÖZAK GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OZGYO',
      Title: 'ÖZDERİCİ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OZRDN',
      Title: 'ÖZERDEN PLASTİK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'OZSUB',
      Title: 'ÖZSU BALIK ÜRETİM A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'PALEN',
      Title: 'PALEN ENERJİ DOĞALGAZ DAĞITIM ENDÜSTRİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PLGAZ',
      Title: 'PALGAZ DOĞALGAZ DAĞITIM TİCARET VE SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PAMEL',
      Title: 'PAMEL YENİLENEBİLİR ELEKTRİK ÜRETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PNLSN',
      Title: 'PANELSAN ÇATI CEPHE SİSTEMLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'PAGYO',
      Title: 'PANORA GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'PAPIL',
      Title: 'PAPİLON SAVUNMA TEKNOLOJİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'PRDGS',
      Title: 'PARDUS GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PRKME',
      Title: 'PARK ELEKTRİK ÜRETİM MADENCİLİK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PARSN',
      Title: 'PARSAN MAKİNA PARÇALARI SANAYİİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PBT, PBTR',
      Title: 'PASHA YATIRIM BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PSGYO',
      Title: 'PASİFİK GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'PCILT',
      Title: 'PC İLETİŞİM VE MEDYA HİZMETLERİ SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PGSUS',
      Title: 'PEGASUS HAVA TAŞIMACILIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PEKGY',
      Title: 'PEKER GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PENGD',
      Title: 'PENGUEN GIDA SANAYİ A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'PENTA',
      Title: 'PENTA TEKNOLOJİ ÜRÜNLERİ DAĞITIM TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PEGYO',
      Title: 'PERA GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PSDTC',
      Title: 'PERGAMON STATUS DIŞ TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'PETKM',
      Title: 'PETKİM PETROKİMYA HOLDİNG A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'PKENT',
      Title: 'PETROKENT TURİZM A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'PHC, PHLLP',
      Title: 'PHİLLİPCAPİTAL MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PETUN',
      Title: 'PINAR ENTEGRE ET VE UN SANAYİİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'PINSU',
      Title: 'PINAR SU VE İÇECEK SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'PNSUT',
      Title: 'PINAR SÜT MAMULLERİ SANAYİİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'PKART',
      Title:
        'PLASTİKKART AKILLI KART İLETİŞİM SİSTEMLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PLTUR',
      Title:
        'PLATFORM TURİZM TAŞIMACILIK GIDA İNŞAAT TEMİZLİK HİZMETLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'POLHO',
      Title: 'POLİSAN HOLDİNG A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'POLTK',
      Title: 'POLİTEKNİK METAL SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PRZMA',
      Title: 'PRİZMA PRES MATBAACILIK YAYINCILIK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'QYHOL',
      Title: 'Q YATIRIM HOLDİNG A.Ş.',
      City: 'AYDIN',
    },
    {
      Code: 'QNBFF',
      Title: 'QNB FİNANS FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'QNBFL',
      Title: 'QNB FİNANS FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'QNBVK',
      Title: 'QNB FİNANS VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FNY, QNBFI',
      Title: 'QNB FİNANS YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'FIN, QNBFB',
      Title: 'QNB FİNANSBANK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'QUAGR',
      Title: 'QUA GRANITE HAYAL YAPI VE ÜRÜNLERİ SANAYİ TİCARET A.Ş.',
      City: 'AYDIN',
    },
    {
      Code: 'RNPOL',
      Title: 'RAİNBOW POLİKARBONAT SANAYİ TİCARET A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'RALYH',
      Title: 'RAL YATIRIM HOLDİNG A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'RAYSG',
      Title: 'RAY SİGORTA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'RYGYO',
      Title: 'REYSAŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'RYSAS',
      Title: 'REYSAŞ TAŞIMACILIK VE LOJİSTİK TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'RHEAG',
      Title: 'RHEA GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'RODRG',
      Title: 'RODRİGO TEKSTİL SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ROYAL',
      Title: 'ROYAL HALI İPLİK TEKSTİL MOBİLYA SANAYİ VE TİCARET A.Ş.',
      City: 'GAZİANTEP',
    },
    {
      Code: 'RTALB',
      Title:
        'RTA LABORATUVARLARI BİYOLOJİK ÜRÜNLER İLAÇ VE MAKİNE SANAYİ TİCARET A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'RUBNS',
      Title: 'RUBENİS TEKSTİL SANAYİ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SAFKR',
      Title:
        'SAFKAR EGE SOĞUTMACILIK KLİMA SOĞUK HAVA TESİSLERİ İHRACAT İTHALAT SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'SANEL',
      Title: 'SAN-EL MÜHENDİSLİK ELEKTRİK TAAHHÜT SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SNICA',
      Title: 'SANİCA ISI SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SANFM',
      Title: 'SANİFOAM ENDÜSTRİ VE TÜKETİM ÜRÜNLERİ SANAYİ TİCARET A.Ş.',
      City: 'TEKİRDAĞ',
    },
    {
      Code: 'SANKO',
      Title: 'SANKO PAZARLAMA İTHALAT İHRACAT A.Ş.',
      City: 'GAZİANTEP',
    },
    {
      Code: 'SAMAT',
      Title:
        'SARAY MATBAACILIK KAĞITÇILIK KIRTASİYECİLİK TİCARET VE SANAYİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'SARKY',
      Title: 'SARKUYSAN ELEKTROLİTİK BAKIR SANAYİ VE TİCARET A.Ş.',
      City: 'KOCAELİ',
    },
    {
      Code: 'SARTN',
      Title: 'SARTEN AMBALAJ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SASA',
      Title: 'SASA POLYESTER SANAYİ A.Ş.',
      City: 'ADANA',
    },
    {
      Code: 'SAYAS',
      Title: 'SAY YENİLENEBİLİR ENERJİ EKİPMANLARI SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'SDTTR',
      Title: 'SDT UZAY VE SAVUNMA TEKNOLOJİLERİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'SEKUR',
      Title: 'SEKURO PLASTİK AMBALAJ SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SELEC',
      Title: 'SELÇUK ECZA DEPOSU TİCARET VE SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SELGD',
      Title: 'SELÇUK GIDA ENDÜSTRİ İHRACAT İTHALAT A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'SELVA',
      Title: 'SELVA GIDA SANAYİ A.Ş.',
      City: 'KONYA',
    },
    {
      Code: 'SNKRN',
      Title: 'SENKRON SİBER GÜVENLİK YAZILIM VE BİLİŞİM ÇÖZÜMLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SRVGY',
      Title: 'SERVET GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SEYKM',
      Title: 'SEYİTLER KİMYA SANAYİ A.Ş.',
      City: 'MANİSA',
    },
    {
      Code: 'SILVR',
      Title: 'SİLVERLİNE ENDÜSTRİ VE TİCARET A.Ş.',
      City: 'AMASYA',
    },
    {
      Code: 'SNGYO',
      Title: 'SİNPAŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SMRTG',
      Title:
        'SMART GÜNEŞ ENERJİSİ TEKNOLOJİLERİ ARAŞTIRMA GELİŞTİRME ÜRETİM SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SMART',
      Title: 'SMARTİKS YAZILIM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SODSN',
      Title: 'SODAŞ SODYUM SANAYİİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'SOKE',
      Title: 'SÖKE DEĞİRMENCİLİK SANAYİ VE TİCARET A.Ş.',
      City: 'AYDIN',
    },
    {
      Code: 'SKTAS',
      Title: 'SÖKTAŞ TEKSTİL SANAYİ VE TİCARET A.Ş.',
      City: 'AYDIN',
    },
    {
      Code: 'SONME',
      Title: 'SÖNMEZ FİLAMENT SENTETİK İPLİK VE ELYAF SANAYİ A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'SNPAM',
      Title: 'SÖNMEZ PAMUKLU SANAYİİ A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'SUMAS',
      Title: 'SUMAŞ SUNİ TAHTA VE MOBİLYA SANAYİ A.Ş.',
      City: 'BALIKESİR',
    },
    {
      Code: 'SUNTK',
      Title: 'SUN TEKSTİL SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'SUWEN',
      Title: 'SUWEN TEKSTİL SANAYİ PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SZUKI',
      Title: 'SUZUKİ MOTORLU ARAÇLAR PAZARLAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SMRFA',
      Title: 'SÜMER FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SMRVA',
      Title: 'SÜMER VARLIK YÖNETİM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SEKFA',
      Title: 'ŞEKER FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SEKFK',
      Title: 'ŞEKER FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SEGYO',
      Title: 'ŞEKER GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SKY, SKYMD',
      Title: 'ŞEKER YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SEK, SKBNK',
      Title: 'ŞEKERBANK T.A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SOKM',
      Title: 'ŞOK MARKETLER TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'DRPHN',
      Title:
        'T.C. HAZİNE VE MALİYE BAKANLIĞI DARPHANE VE DAMGA MATBAASI GENEL MÜDÜRLÜĞÜ',
      City: 'İSTANBUL',
    },
    {
      Code: 'TOKI',
      Title: 'T.C. TOPLU KONUT İDARESİ BAŞKANLIĞI',
      City: 'İSTANBUL',
    },
    {
      Code: 'TAC, TCRYT',
      Title: 'TACİRLER YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TAMFA',
      Title: 'TAM FİNANS FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TNZTP',
      Title:
        'TAPDİ OKSİJEN ÖZEL SAĞLIK VE EĞİTİM HİZMETLERİ SANAYİ TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'TATGD',
      Title: 'TAT GIDA SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TAVHL',
      Title: 'TAV HAVALİMANLARI HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TEBFA',
      Title: 'TEB FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TEBCE',
      Title: 'TEB FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TBY, TEBYT',
      Title: 'TEB YATIRIM MENKUL DEĞERLER A.Ş.',
    },
    {
      Code: 'TEKTU',
      Title: 'TEK-ART İNŞAAT TİCARET TURİZM SANAYİ VE YATIRIMLAR A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TKFEN',
      Title: 'TEKFEN HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TKNSA',
      Title: 'TEKNOSA İÇ VE DIŞ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TMPOL',
      Title: 'TEMAPOL POLİMER PLASTİK VE İNŞAAT SANAYİ TİCARET A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'TERA, TRA',
      Title: 'TERA YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TETMT',
      Title: 'TETAMAT GIDA YATIRIMLARI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TFNVK',
      Title: 'TF VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TGSAS',
      Title: 'TGS DIŞ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TOASO',
      Title: 'TOFAŞ TÜRK OTOMOBİL FABRİKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TRGYO',
      Title: 'TORUNLAR GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TLMAN',
      Title: 'TRABZON LİMAN İŞLETMECİLİĞİ A.Ş.',
      City: 'TRABZON',
    },
    {
      Code: 'TSPOR',
      Title: 'TRABZONSPOR SPORTİF YATIRIM VE FUTBOL İŞLETMECİLİĞİ TİCARET A.Ş.',
      City: 'TRABZON',
    },
    {
      Code: 'TDGYO',
      Title: 'TREND GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISKMD, TVM',
      Title: 'TRIVE YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TSGYO',
      Title: 'TSKB GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TUCLK',
      Title: 'TUĞÇELİK ALÜMİNYUM VE METAL MAMÜLLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TUKAS',
      Title: 'TUKAŞ GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'TRCAS',
      Title: 'TURCAS PETROL A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TUREX',
      Title: 'TUREKS TURİZM TAŞIMACILIK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TRILC',
      Title: 'TURK İLAÇ VE SERUM SANAYİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'FNCLL',
      Title: 'TURKCELL FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TCELL',
      Title: 'TURKCELL İLETİŞİM HİZMETLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TMSN',
      Title: 'TÜMOSAN MOTOR VE TRAKTÖR SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TUPRS',
      Title: 'TÜPRAŞ-TÜRKİYE PETROL RAFİNERİLERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'THYAO',
      Title: 'TÜRK HAVA YOLLARI A.O.',
      City: 'İSTANBUL',
    },
    {
      Code: 'PRKAB',
      Title: 'TÜRK PRYSMİAN KABLO VE SİSTEMLERİ A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'TTKOM',
      Title: 'TÜRK TELEKOMÜNİKASYON A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'TTRAK',
      Title: 'TÜRK TRAKTÖR VE ZİRAAT MAKİNELERİ A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'TBORG',
      Title: 'TÜRK TUBORG BİRA VE MALT SANAYİİ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'TURGG',
      Title: 'TÜRKER PROJE GAYRİMENKUL VE YATIRIM GELİŞTİRME A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'GARAN, TGB',
      Title: 'TÜRKİYE GARANTİ BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'HALKB, THL',
      Title: 'TÜRKİYE HALK BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'EXIMB, THR',
      Title: 'TÜRKİYE İHRACAT KREDİ BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ISATR, ISBTR, ISCTR, ISKUR, TIB',
      Title: 'TÜRKİYE İŞ BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'KLN, KLNMA',
      Title: 'TÜRKİYE KALKINMA VE YATIRIM BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TSK, TSKB',
      Title: 'TÜRKİYE SINAİ KALKINMA BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TURSG',
      Title: 'TÜRKİYE SİGORTA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'SISE',
      Title: 'TÜRKİYE ŞİŞE VE CAM FABRİKALARI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'TVB, VAKBN',
      Title: 'TÜRKİYE VAKIFLAR BANKASI T.A.O.',
      City: 'İSTANBUL',
    },
    {
      Code: 'UFUK',
      Title: 'UFUK YATIRIM YÖNETİM VE GAYRİMENKUL A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ULAS',
      Title:
        'ULAŞLAR TURİZM YATIRIMLARI VE DAYANIKLI TÜKETİM MALLARI TİCARET PAZARLAMA A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ULUFA',
      Title: 'ULUSAL FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ULUSE',
      Title: 'ULUSOY ELEKTRİK İMALAT TAAHHÜT VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ULUUN',
      Title: 'ULUSOY UN SANAYİ VE TİCARET A.Ş.',
      City: 'SAMSUN',
    },
    {
      Code: 'UMPAS',
      Title: 'UMPAŞ HOLDİNG A.Ş.',
      City: 'UŞAK',
    },
    {
      Code: 'USAK',
      Title: 'UŞAK SERAMİK SANAYİ A.Ş.',
      City: 'UŞAK',
    },
    {
      Code: 'UZERB',
      Title: 'UZERTAŞ BOYA SANAYİ TİCARET VE YATIRIM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ULKER',
      Title: 'ÜLKER BİSKÜVİ SANAYİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'UNLUS, UNS',
      Title: 'ÜNLÜ MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'UNLU',
      Title: 'ÜNLÜ YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VAKFA',
      Title: 'VAKIF FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VAKFN',
      Title: 'VAKIF FİNANSAL KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VKGYO',
      Title: 'VAKIF GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VKFYO',
      Title: 'VAKIF MENKUL KIYMET YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VAKVK',
      Title: 'VAKIF VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VAKKO',
      Title: 'VAKKO TEKSTİL VE HAZIR GİYİM SANAYİ İŞLETMELERİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VANGD',
      Title: 'VANET GIDA SANAYİ İÇ VE DIŞ TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VBTYZ',
      Title: 'VBT YAZILIM A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VDFLO',
      Title: 'VDF FİLO KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VERUS',
      Title: 'VERUSA HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VERTU',
      Title: 'VERUSATURK GİRİŞİM SERMAYESİ YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VESBE',
      Title: 'VESTEL BEYAZ EŞYA SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VESTL',
      Title: 'VESTEL ELEKTRONİK SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'VKING',
      Title: 'VİKİNG KAĞIT VE SELÜLOZ A.Ş.',
      City: 'İZMİR',
    },
    {
      Code: 'VDFAS',
      Title: 'VOLKSWAGEN DOĞUŞ FİNANSMAN A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YKFKT',
      Title: 'YAPI KREDİ FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YKR, YKYAT',
      Title: 'YAPI KREDİ YATIRIM MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YKB, YKBNK',
      Title: 'YAPI VE KREDİ BANKASI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YAPRK',
      Title: 'YAPRAK SÜT VE BESİ ÇİFTLİKLERİ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YATAS',
      Title: 'YATAŞ YATAK VE YORGAN SANAYİ TİCARET A.Ş.',
      City: 'KAYSERİ',
    },
    {
      Code: 'YAT, YFMEN',
      Title: 'YATIRIM FİNANSMAN MENKUL DEĞERLER A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YATVK',
      Title: 'YATIRIM VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YYLGD',
      Title: 'YAYLA AGRO GIDA SANAYİ VE TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'YAYLA',
      Title: 'YAYLA ENERJİ ÜRETİM TURİZM VE İNŞAAT TİCARET A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'YGGYO',
      Title: 'YENİ GİMAT GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'YEOTK',
      Title: 'YEO TEKNOLOJİ ENERJİ VE ENDÜSTRİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YGYO',
      Title: 'YEŞİL GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YYAPI',
      Title: 'YEŞİL YAPI ENDÜSTRİSİ A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YESIL',
      Title: 'YEŞİL YATIRIM HOLDİNG A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YBTAS',
      Title:
        'YİBİTAŞ YOZGAT İŞÇİ BİRLİĞİ İNŞAAT MALZEMELERİ TİCARET VE SANAYİ A.Ş.',
      City: 'YOZGAT',
    },
    {
      Code: 'YONGA',
      Title: 'YONGA MOBİLYA SANAYİ VE TİCARET A.Ş.',
      City: 'DENİZLİ',
    },
    {
      Code: 'YKSLN',
      Title: 'YÜKSELEN ÇELİK A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'YUNSA',
      Title: 'YÜNSA YÜNLÜ SANAYİ VE TİCARET A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ZEDUR',
      Title: 'ZEDUR ENERJİ ELEKTRİK ÜRETİM A.Ş.',
      City: 'ANKARA',
    },
    {
      Code: 'ZRGYO',
      Title: 'ZİRAAT GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ZKBVK',
      Title: 'ZİRAAT KATILIM VARLIK KİRALAMA A.Ş.',
      City: 'İSTANBUL',
    },
    {
      Code: 'ZOREN',
      Title: 'ZORLU ENERJİ ELEKTRİK ÜRETİM A.Ş.',
      City: 'BURSA',
    },
    {
      Code: 'ZORLF',
      Title: 'ZORLU FAKTORİNG A.Ş.',
      City: 'İSTANBUL',
    },
  ];
}
