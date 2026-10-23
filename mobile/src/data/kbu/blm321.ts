/**
 * BLM321 Mikroişlemciler (Microprocessors), 14 weeks following the KBU course contents: an 8-bit
 * microcontroller first (examples on the PIC16F877A), then Intel x86 (8086) assembly.
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm321Lessons: LessonSource[] = [
  {
    id: 'mp-w01-8bit',
    week: 1,
    title: {
      fr: 'Le microprocesseur 8 bits',
      en: 'The 8-bit microprocessor',
      tr: '8 bitlik mikroişlemci',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un microprocesseur est un processeur sur une seule puce : unité arithmétique et logique (UAL), registres, unité de contrôle. Il a besoin de mémoire et de périphériques externes. « 8 bits » veut dire qu’il traite des données de 8 bits à la fois. Exemple classique : l’Intel 8085.',
          en: 'A microprocessor is a processor on a single chip: arithmetic logic unit (ALU), registers, control unit. It needs external memory and peripherals. “8-bit” means it processes 8 bits of data at a time. Classic example: the Intel 8085.',
          tr: 'Mikroişlemci tek bir yonga üzerindeki işlemcidir: aritmetik mantık birimi (ALU), yazmaçlar, kontrol birimi. Harici belleğe ve çevre birimlerine ihtiyaç duyar. “8 bit”, bir seferde 8 bitlik veri işlediği anlamına gelir. Klasik örnek: Intel 8085.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Intel 8085\nBus de données : 8 bits      Bus d’adresses : 16 bits → 2¹⁶ = 64 Ko\nRegistres : A (accumulateur), B, C, D, E, H, L (paires BC, DE, HL)\n            PC (16 bits), SP (16 bits)\nDrapeaux  : S (signe), Z (zéro), AC (retenue auxiliaire), P (parité), CY\n\nMicroprocesseur   : CPU seul, mémoire et E/S à l’extérieur (PC)\nMicrocontrôleur   : CPU + RAM + ROM + E/S + timers sur une puce\n                    (machine à laver, télécommande, voiture)',
          en: 'Intel 8085\nData bus: 8 bits      Address bus: 16 bits → 2¹⁶ = 64 KB\nRegisters: A (accumulator), B, C, D, E, H, L (pairs BC, DE, HL)\n           PC (16 bits), SP (16 bits)\nFlags    : S (sign), Z (zero), AC (auxiliary carry), P (parity), CY\n\nMicroprocessor  : CPU only, memory and I/O outside (PC)\nMicrocontroller : CPU + RAM + ROM + I/O + timers on one chip\n                  (washing machine, remote control, car)',
          tr: 'Intel 8085\nVeri yolu: 8 bit      Adres yolu: 16 bit → 2¹⁶ = 64 KB\nYazmaçlar: A (akümülatör), B, C, D, E, H, L (çiftler BC, DE, HL)\n           PC (16 bit), SP (16 bit)\nBayraklar: S (işaret), Z (sıfır), AC (yardımcı elde), P (eşlik), CY\n\nMikroişlemci     : yalnızca CPU, bellek ve G/Ç dışarıda (PC)\nMikrodenetleyici : CPU + RAM + ROM + G/Ç + zamanlayıcılar tek yongada\n                   (çamaşır makinesi, kumanda, otomobil)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien d’octets un 8085 peut-il adresser ? (2) Pour une machine à laver, vaut-il mieux un microprocesseur ou un microcontrôleur ? Justifie.',
          en: '(1) How many bytes can an 8085 address? (2) For a washing machine, is a microprocessor or a microcontroller better? Explain.',
          tr: '(1) Bir 8085 kaç bayt adresleyebilir? (2) Bir çamaşır makinesi için mikroişlemci mi yoksa mikrodenetleyici mi daha iyidir? Açıkla.',
        },
        solution: {
          fr: '(1) 16 lignes d’adresse : 2¹⁶ = 65 536 octets, soit 64 Ko. (2) Un microcontrôleur : tout est sur une seule puce (mémoire, ports, timers), donc moins cher, plus petit et peu gourmand en énergie. La machine n’a pas besoin de beaucoup de puissance de calcul, mais de lire des capteurs et de commander des moteurs.',
          en: '(1) 16 address lines: 2¹⁶ = 65,536 bytes, that is 64 KB. (2) A microcontroller: everything is on one chip (memory, ports, timers), so it is cheaper, smaller and uses little power. The machine doesn’t need much computing power, but must read sensors and drive motors.',
          tr: '(1) 16 adres hattı: 2¹⁶ = 65.536 bayt, yani 64 KB. (2) Mikrodenetleyici: her şey tek yongada (bellek, portlar, zamanlayıcılar), bu yüzden daha ucuz, daha küçük ve az enerji harcar. Makine çok hesaplama gücüne değil, sensörleri okumaya ve motorları sürmeye ihtiyaç duyar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la principale différence entre un microcontrôleur et un microprocesseur ?',
        en: 'What is the main difference between a microcontroller and a microprocessor?',
        tr: 'Mikrodenetleyici ile mikroişlemci arasındaki temel fark nedir?',
      },
      options: {
        fr: ['Le microcontrôleur est toujours plus rapide', 'Le microcontrôleur intègre mémoire et E/S sur la même puce', 'Le microprocesseur n’a pas d’UAL'],
        en: ['The microcontroller is always faster', 'The microcontroller has memory and I/O on the same chip', 'The microprocessor has no ALU'],
        tr: ['Mikrodenetleyici her zaman daha hızlıdır', 'Mikrodenetleyici bellek ve G/Ç’yi aynı yongada barındırır', 'Mikroişlemcinin ALU’su yoktur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le microcontrôleur est un petit ordinateur complet sur une puce. Le microprocesseur est plus puissant mais a besoin de composants externes.',
        en: 'A microcontroller is a small complete computer on a chip. A microprocessor is more powerful but needs external components.',
        tr: 'Mikrodenetleyici tek yonga üzerinde küçük ve eksiksiz bir bilgisayardır. Mikroişlemci daha güçlüdür ama harici bileşenlere ihtiyaç duyar.',
      },
    },
  },
  {
    id: 'mp-w02-microcontroller',
    week: 2,
    title: {
      fr: 'Structure d’un microcontrôleur 8 bits (PIC16F877A)',
      en: '8-bit microcontroller structure (PIC16F877A)',
      tr: '8 bitlik mikrodenetleyici yapısı (PIC16F877A)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le PIC16F877A suit l’architecture Harvard : la mémoire de programme et la mémoire de données sont séparées, avec des bus séparés, ce qui permet de lire une instruction et une donnée en même temps. C’est un processeur RISC de 35 instructions, avec un registre de travail W.',
          en: 'The PIC16F877A follows the Harvard architecture: program memory and data memory are separate, with separate buses, so an instruction and a piece of data can be read at the same time. It is a RISC processor with 35 instructions and a working register W.',
          tr: 'PIC16F877A Harvard mimarisini izler: program belleği ile veri belleği ayrıdır ve ayrı yolları vardır; böylece bir komut ve bir veri aynı anda okunabilir. 35 komutlu ve bir çalışma yazmacı W’ya sahip bir RISC işlemcidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'PIC16F877A\nMémoire programme : 8K mots de 14 bits (Flash)\nRAM de données    : 368 octets (registres de fichier, en 4 banques)\nEEPROM            : 256 octets\nPorts d’E/S       : PORTA à PORTE ; TRISx fixe le sens (0 = sortie, 1 = entrée)\nAutres            : timers, convertisseur A/N 10 bits, USART, PWM\nHorloge           : 1 cycle d’instruction = 4 cycles d’horloge (Fosc / 4)',
          en: 'PIC16F877A\nProgram memory : 8K words of 14 bits (Flash)\nData RAM       : 368 bytes (file registers, in 4 banks)\nEEPROM         : 256 bytes\nI/O ports      : PORTA to PORTE; TRISx sets the direction (0 = output, 1 = input)\nOthers         : timers, 10-bit A/D converter, USART, PWM\nClock          : 1 instruction cycle = 4 clock cycles (Fosc / 4)',
          tr: 'PIC16F877A\nProgram belleği : 14 bitlik 8K kelime (Flash)\nVeri RAM’i      : 368 bayt (dosya yazmaçları, 4 bankta)\nEEPROM          : 256 bayt\nG/Ç portları    : PORTA-PORTE; TRISx yönü belirler (0 = çıkış, 1 = giriş)\nDiğerleri       : zamanlayıcılar, 10 bit A/D dönüştürücü, USART, PWM\nSaat            : 1 komut çevrimi = 4 saat çevrimi (Fosc / 4)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Avec un quartz de 4 MHz, puis de 20 MHz, combien dure un cycle d’instruction ? (2) Quelle valeur écrire dans TRISB pour que RB0 à RB3 soient des sorties et RB4 à RB7 des entrées ?',
          en: '(1) With a 4 MHz crystal, then a 20 MHz one, how long is an instruction cycle? (2) Which value should be written to TRISB so that RB0 to RB3 are outputs and RB4 to RB7 inputs?',
          tr: '(1) 4 MHz’lik, sonra 20 MHz’lik bir kristalle bir komut çevrimi ne kadar sürer? (2) RB0-RB3 çıkış, RB4-RB7 giriş olsun diye TRISB’ye hangi değer yazılmalıdır?',
        },
        solution: {
          fr: '(1) 4 MHz : 4 MHz / 4 = 1 MHz, soit 1 µs par instruction. 20 MHz : 5 MHz, soit 0,2 µs. (2) Un 0 met la broche en sortie, un 1 en entrée. RB7…RB4 = 1111, RB3…RB0 = 0000 : TRISB = 11110000 = F0h.',
          en: '(1) 4 MHz: 4 MHz / 4 = 1 MHz, so 1 µs per instruction. 20 MHz: 5 MHz, so 0.2 µs. (2) A 0 makes the pin an output, a 1 an input. RB7…RB4 = 1111, RB3…RB0 = 0000: TRISB = 11110000 = F0h.',
          tr: '(1) 4 MHz: 4 MHz / 4 = 1 MHz, yani komut başına 1 µs. 20 MHz: 5 MHz, yani 0,2 µs. (2) 0 pini çıkış, 1 giriş yapar. RB7…RB4 = 1111, RB3…RB0 = 0000: TRISB = 11110000 = F0h.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans l’architecture Harvard, que sépare-t-on ?',
        en: 'What does the Harvard architecture separate?',
        tr: 'Harvard mimarisi neyi ayırır?',
      },
      options: {
        fr: ['Le processeur et l’horloge', 'La mémoire de programme et la mémoire de données', 'Les entrées et les sorties'],
        en: ['The processor and the clock', 'Program memory and data memory', 'Inputs and outputs'],
        tr: ['İşlemci ile saati', 'Program belleği ile veri belleğini', 'Girişler ile çıkışları'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Harvard sépare programme et données, avec deux bus. L’architecture de von Neumann (PC) les met dans la même mémoire.',
        en: 'Harvard separates program and data, with two buses. The von Neumann architecture (PC) puts them in the same memory.',
        tr: 'Harvard, iki yolla programı ve verileri ayırır. Von Neumann mimarisi (PC) onları aynı bellekte tutar.',
      },
    },
  },
  {
    id: 'mp-w03-pic-instructions',
    week: 3,
    title: {
      fr: 'Jeu d’instructions et modes d’adressage du PIC',
      en: 'PIC instruction set and addressing modes',
      tr: 'PIC komut kümesi ve adresleme modları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les instructions du PIC travaillent avec W et un registre f. Le bit de destination d choisit où va le résultat : d = W (0) dans W, d = F (1) dans le registre f.',
          en: 'PIC instructions work with W and a register f. The destination bit d chooses where the result goes: d = W (0) into W, d = F (1) into register f.',
          tr: 'PIC komutları W ve bir f yazmacıyla çalışır. Hedef biti d sonucun nereye gideceğini seçer: d = W (0) ise W’ya, d = F (1) ise f yazmacına.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Immédiat (littéral) : MOVLW 0x25      W ← 25h\nDirect              : MOVWF 0x20      [20h] ← W\nIndirect            : MOVLW 0x30\n                      MOVWF FSR       FSR ← 30h (pointeur)\n                      MOVF  INDF, W   W ← [30h]\nBit                 : BSF PORTB, 0    met RB0 à 1 (BCF met à 0)\n\nAutres : ADDWF f,d  SUBWF f,d (f − W)  INCF  DECF  CLRF\n         ANDWF  IORWF  XORWF  BTFSS / BTFSC (saute si bit = 1 / 0)\n         GOTO  CALL  RETURN  DECFSZ f,d (décrémente, saute si 0)',
          en: 'Immediate (literal): MOVLW 0x25      W ← 25h\nDirect             : MOVWF 0x20      [20h] ← W\nIndirect           : MOVLW 0x30\n                     MOVWF FSR       FSR ← 30h (pointer)\n                     MOVF  INDF, W   W ← [30h]\nBit                : BSF PORTB, 0    sets RB0 to 1 (BCF clears it)\n\nOthers: ADDWF f,d  SUBWF f,d (f − W)  INCF  DECF  CLRF\n        ANDWF  IORWF  XORWF  BTFSS / BTFSC (skip if bit = 1 / 0)\n        GOTO  CALL  RETURN  DECFSZ f,d (decrement, skip if 0)',
          tr: 'Anında (literal) : MOVLW 0x25      W ← 25h\nDoğrudan         : MOVWF 0x20      [20h] ← W\nDolaylı          : MOVLW 0x30\n                   MOVWF FSR       FSR ← 30h (işaretçi)\n                   MOVF  INDF, W   W ← [30h]\nBit              : BSF PORTB, 0    RB0’ı 1 yapar (BCF 0 yapar)\n\nDiğerleri: ADDWF f,d  SUBWF f,d (f − W)  INCF  DECF  CLRF\n           ANDWF  IORWF  XORWF  BTFSS / BTFSC (bit = 1 / 0 ise atla)\n           GOTO  CALL  RETURN  DECFSZ f,d (azalt, 0 ise atla)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Suis ce programme : que valent W et le registre 0x20 à la fin ?',
          en: 'Trace this program: what are W and register 0x20 at the end?',
          tr: 'Bu programı izle: sonunda W ve 0x20 yazmacı kaçtır?',
        },
        code: 'MOVLW 0x0F\nMOVWF 0x20\nMOVLW 0x03\nADDWF 0x20, F\nSUBWF 0x20, W',
        solution: {
          fr: 'MOVLW 0x0F : W = 0Fh. MOVWF 0x20 : [20h] = 0Fh. MOVLW 0x03 : W = 03h. ADDWF 0x20, F : [20h] = 0Fh + 03h = 12h, W reste 03h. SUBWF 0x20, W : W = [20h] − W = 12h − 03h = 0Fh. Fin : W = 0Fh et [20h] = 12h. Attention : SUBWF calcule f − W, pas W − f.',
          en: 'MOVLW 0x0F: W = 0Fh. MOVWF 0x20: [20h] = 0Fh. MOVLW 0x03: W = 03h. ADDWF 0x20, F: [20h] = 0Fh + 03h = 12h, W stays 03h. SUBWF 0x20, W: W = [20h] − W = 12h − 03h = 0Fh. End: W = 0Fh and [20h] = 12h. Careful: SUBWF computes f − W, not W − f.',
          tr: 'MOVLW 0x0F: W = 0Fh. MOVWF 0x20: [20h] = 0Fh. MOVLW 0x03: W = 03h. ADDWF 0x20, F: [20h] = 0Fh + 03h = 12h, W 03h kalır. SUBWF 0x20, W: W = [20h] − W = 12h − 03h = 0Fh. Son: W = 0Fh ve [20h] = 12h. Dikkat: SUBWF, W − f değil f − W hesaplar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel mode d’adressage utilise les registres FSR et INDF ?',
        en: 'Which addressing mode uses the FSR and INDF registers?',
        tr: 'FSR ve INDF yazmaçlarını hangi adresleme modu kullanır?',
      },
      options: { fr: ['Immédiat', 'Direct', 'Indirect'], en: ['Immediate', 'Direct', 'Indirect'], tr: ['Anında', 'Doğrudan', 'Dolaylı'] },
      answerIndex: 2,
      explanation: {
        fr: 'FSR contient une adresse, et lire ou écrire INDF accède à la case pointée par FSR : c’est l’adressage indirect, utile pour parcourir un tableau.',
        en: 'FSR holds an address, and reading or writing INDF reaches the cell FSR points to: that is indirect addressing, handy to walk through an array.',
        tr: 'FSR bir adres tutar ve INDF’i okumak veya yazmak FSR’nin gösterdiği hücreye erişir: bu dolaylı adreslemedir, bir diziyi dolaşmak için kullanışlıdır.',
      },
    },
  },
  {
    id: 'mp-w04-pic-programming',
    week: 4,
    title: {
      fr: 'Programmer le microcontrôleur : LED et temporisation',
      en: 'Programming the microcontroller: LEDs and delays',
      tr: 'Mikrodenetleyiciyi programlamak: LED ve gecikme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le premier programme classique fait clignoter des LED sur le PORTB. Il faut d’abord configurer le port en sortie (TRISB, qui est dans la banque 1 : on change de banque avec le bit RP0 du registre STATUS), puis alterner allumage et extinction avec une boucle de temporisation entre les deux.',
          en: 'The classic first program blinks LEDs on PORTB. First configure the port as output (TRISB, which is in bank 1: switch banks with bit RP0 of the STATUS register), then alternate on and off with a delay loop in between.',
          tr: 'Klasik ilk program PORTB’deki LED’leri yakıp söndürür. Önce port çıkış olarak ayarlanır (TRISB 1. banktadır: banka STATUS yazmacının RP0 bitiyle geçilir), sonra aralarında bir gecikme döngüsüyle yakma ve söndürme sırayla yapılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '        #include <p16f877a.inc>\nCOUNT   EQU   0x20\n        ORG   0x00\n        BSF   STATUS, RP0   ; banque 1\n        CLRF  TRISB         ; PORTB en sortie\n        BCF   STATUS, RP0   ; banque 0\nMAIN    MOVLW 0xFF\n        MOVWF PORTB         ; LED allumées\n        CALL  DELAY\n        CLRF  PORTB         ; LED éteintes\n        CALL  DELAY\n        GOTO  MAIN\nDELAY   MOVLW D\'250\'\n        MOVWF COUNT\nD1      DECFSZ COUNT, F     ; 1 cycle (2 quand il saute)\n        GOTO  D1            ; 2 cycles\n        RETURN\n        END',
          en: '        #include <p16f877a.inc>\nCOUNT   EQU   0x20\n        ORG   0x00\n        BSF   STATUS, RP0   ; bank 1\n        CLRF  TRISB         ; PORTB as output\n        BCF   STATUS, RP0   ; bank 0\nMAIN    MOVLW 0xFF\n        MOVWF PORTB         ; LEDs on\n        CALL  DELAY\n        CLRF  PORTB         ; LEDs off\n        CALL  DELAY\n        GOTO  MAIN\nDELAY   MOVLW D\'250\'\n        MOVWF COUNT\nD1      DECFSZ COUNT, F     ; 1 cycle (2 when it skips)\n        GOTO  D1            ; 2 cycles\n        RETURN\n        END',
          tr: '        #include <p16f877a.inc>\nCOUNT   EQU   0x20\n        ORG   0x00\n        BSF   STATUS, RP0   ; 1. bank\n        CLRF  TRISB         ; PORTB çıkış\n        BCF   STATUS, RP0   ; 0. bank\nMAIN    MOVLW 0xFF\n        MOVWF PORTB         ; LED’ler yanık\n        CALL  DELAY\n        CLRF  PORTB         ; LED’ler sönük\n        CALL  DELAY\n        GOTO  MAIN\nDELAY   MOVLW D\'250\'\n        MOVWF COUNT\nD1      DECFSZ COUNT, F     ; 1 çevrim (atlayınca 2)\n        GOTO  D1            ; 2 çevrim\n        RETURN\n        END',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec un quartz de 4 MHz, combien de temps dure la boucle D1 quand COUNT part de 250 ? Combien de boucles imbriquées faudrait-il pour une pause d’environ 0,5 s ?',
          en: 'With a 4 MHz crystal, how long does loop D1 take when COUNT starts at 250? How many nested loops would be needed for a pause of about 0.5 s?',
          tr: '4 MHz’lik bir kristalle COUNT 250’den başladığında D1 döngüsü ne kadar sürer? Yaklaşık 0,5 s’lik bir bekleme için kaç iç içe döngü gerekir?',
        },
        solution: {
          fr: 'À 4 MHz, un cycle = 1 µs. Pour les 249 premiers tours : DECFSZ (1) + GOTO (2) = 3 cycles. Au dernier tour, DECFSZ saute : 2 cycles. Total = 249 × 3 + 2 = 749 cycles ≈ 0,75 ms (751 µs avec MOVLW et MOVWF). Une seule boucle de 8 bits ne dépasse pas environ 0,77 ms (COUNT = 0 donne 256 tours) : pour 0,5 s, il faut une deuxième boucle autour qui la répète environ 667 fois, donc en pratique trois boucles imbriquées, ou un timer.',
          en: 'At 4 MHz, one cycle = 1 µs. For the first 249 rounds: DECFSZ (1) + GOTO (2) = 3 cycles. On the last round DECFSZ skips: 2 cycles. Total = 249 × 3 + 2 = 749 cycles ≈ 0.75 ms (751 µs with MOVLW and MOVWF). A single 8-bit loop cannot exceed about 0.77 ms (COUNT = 0 gives 256 rounds): for 0.5 s, an outer loop must repeat it about 667 times, so in practice three nested loops, or a timer.',
          tr: '4 MHz’de bir çevrim = 1 µs. İlk 249 tur için: DECFSZ (1) + GOTO (2) = 3 çevrim. Son turda DECFSZ atlar: 2 çevrim. Toplam = 249 × 3 + 2 = 749 çevrim ≈ 0,75 ms (MOVLW ve MOVWF ile 751 µs). Tek bir 8 bitlik döngü yaklaşık 0,77 ms’yi aşamaz (COUNT = 0, 256 tur verir): 0,5 s için onu yaklaşık 667 kez tekrarlayan bir dış döngü gerekir, yani pratikte üç iç içe döngü ya da bir zamanlayıcı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi met-on BSF STATUS, RP0 avant d’écrire dans TRISB ?',
        en: 'Why is BSF STATUS, RP0 used before writing to TRISB?',
        tr: 'TRISB’ye yazmadan önce neden BSF STATUS, RP0 kullanılır?',
      },
      options: {
        fr: ['Pour allumer les LED', 'Pour passer en banque 1, où se trouve TRISB', 'Pour réinitialiser le PIC'],
        en: ['To turn on the LEDs', 'To switch to bank 1, where TRISB is', 'To reset the PIC'],
        tr: ['LED’leri yakmak için', 'TRISB’nin bulunduğu 1. banka geçmek için', 'PIC’i sıfırlamak için'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les registres TRIS sont en banque 1, les PORT en banque 0. On sélectionne la banque avec RP0 (et RP1), puis on revient en banque 0 pour écrire sur PORTB.',
        en: 'The TRIS registers are in bank 1, the PORT registers in bank 0. The bank is selected with RP0 (and RP1), then you go back to bank 0 to write to PORTB.',
        tr: 'TRIS yazmaçları 1. bankta, PORT yazmaçları 0. banktadır. Bank RP0 (ve RP1) ile seçilir, sonra PORTB’ye yazmak için 0. banka dönülür.',
      },
    },
  },
  {
    id: 'mp-w05-x86-architecture',
    week: 5,
    title: {
      fr: 'Architecture du x86 (8086)',
      en: 'x86 architecture (8086)',
      tr: 'x86 mimarisi (8086)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le 8086 est un processeur 16 bits avec un bus d’adresses de 20 bits (1 Mo). Il comprend une unité d’interface de bus (BIU), qui va chercher les instructions à l’avance dans une file, et une unité d’exécution (EU). C’est l’ancêtre des processeurs des PC actuels.',
          en: 'The 8086 is a 16-bit processor with a 20-bit address bus (1 MB). It has a bus interface unit (BIU), which prefetches instructions into a queue, and an execution unit (EU). It is the ancestor of today’s PC processors.',
          tr: '8086, 20 bitlik adres yoluna (1 MB) sahip 16 bitlik bir işlemcidir. Komutları önceden bir kuyruğa getiren bir yol arayüz birimi (BIU) ve bir yürütme birimi (EU) içerir. Günümüz PC işlemcilerinin atasıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Registres généraux : AX (AH:AL), BX, CX (compteur), DX\nPointeurs et index  : SP (pile), BP, SI (source), DI (destination)\nSegments            : CS (code), DS (données), SS (pile), ES (extra)\nIP                  : pointeur d’instruction\nDrapeaux            : CF, ZF, SF, OF, PF, AF, DF, IF, TF\n\nAdresse physique = segment × 16 + offset   (segment:offset)\nex. CS:IP = 1000h:0020h → 10000h + 0020h = 10020h',
          en: 'General registers: AX (AH:AL), BX, CX (counter), DX\nPointers & indexes: SP (stack), BP, SI (source), DI (destination)\nSegments          : CS (code), DS (data), SS (stack), ES (extra)\nIP                : instruction pointer\nFlags             : CF, ZF, SF, OF, PF, AF, DF, IF, TF\n\nPhysical address = segment × 16 + offset   (segment:offset)\ne.g. CS:IP = 1000h:0020h → 10000h + 0020h = 10020h',
          tr: 'Genel yazmaçlar  : AX (AH:AL), BX, CX (sayaç), DX\nİşaretçi ve indis : SP (yığın), BP, SI (kaynak), DI (hedef)\nSegmentler       : CS (kod), DS (veri), SS (yığın), ES (ek)\nIP               : komut işaretçisi\nBayraklar        : CF, ZF, SF, OF, PF, AF, DF, IF, TF\n\nFiziksel adres = segment × 16 + ofset   (segment:ofset)\nörn. CS:IP = 1000h:0020h → 10000h + 0020h = 10020h',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) DS = 1234h et l’offset vaut 0022h : quelle est l’adresse physique ? (2) Pourquoi des adresses segment:offset différentes peuvent-elles désigner la même case ? Donne un exemple.',
          en: '(1) DS = 1234h and the offset is 0022h: what is the physical address? (2) Why can different segment:offset pairs point to the same cell? Give an example.',
          tr: '(1) DS = 1234h ve ofset 0022h: fiziksel adres nedir? (2) Farklı segment:ofset çiftleri neden aynı hücreyi gösterebilir? Bir örnek ver.',
        },
        solution: {
          fr: '(1) 1234h × 16 = 12340h (on ajoute un 0 hexadécimal à droite), puis + 0022h = 12362h. (2) Car on additionne segment × 16 et offset : plusieurs couples donnent la même somme. Exemple : 1236h:0002h donne 12360h + 0002h = 12362h, la même case que 1234h:0022h.',
          en: '(1) 1234h × 16 = 12340h (append a hex 0 on the right), then + 0022h = 12362h. (2) Because segment × 16 and offset are added: several pairs give the same sum. Example: 1236h:0002h gives 12360h + 0002h = 12362h, the same cell as 1234h:0022h.',
          tr: '(1) 1234h × 16 = 12340h (sağa onaltılık bir 0 eklenir), sonra + 0022h = 12362h. (2) Çünkü segment × 16 ile ofset toplanır: birkaç çift aynı toplamı verir. Örnek: 1236h:0002h, 12360h + 0002h = 12362h verir; 1234h:0022h ile aynı hücre.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de mémoire le 8086 peut-il adresser avec son bus d’adresses de 20 bits ?',
        en: 'How much memory can the 8086 address with its 20-bit address bus?',
        tr: '8086, 20 bitlik adres yoluyla ne kadar bellek adresleyebilir?',
      },
      options: { fr: ['64 Ko', '1 Mo', '4 Go'], en: ['64 KB', '1 MB', '4 GB'], tr: ['64 KB', '1 MB', '4 GB'] },
      answerIndex: 1,
      explanation: {
        fr: '2²⁰ = 1 048 576 octets = 1 Mo. Les registres ne font que 16 bits (64 Ko), d’où l’astuce segment × 16 + offset.',
        en: '2²⁰ = 1,048,576 bytes = 1 MB. Registers are only 16 bits (64 KB), hence the segment × 16 + offset trick.',
        tr: '2²⁰ = 1.048.576 bayt = 1 MB. Yazmaçlar yalnızca 16 bittir (64 KB), segment × 16 + ofset hilesi bu yüzdendir.',
      },
    },
  },
  {
    id: 'mp-w06-x86-addressing',
    week: 6,
    title: {
      fr: 'Modes d’adressage du x86',
      en: 'x86 addressing modes',
      tr: 'x86 adresleme modları',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Immédiat              MOV AX, 1234h        AX ← 1234h\nRegistre              MOV AX, BX           AX ← BX\nDirect                MOV AX, [0500h]      AX ← mot à DS:0500h\nIndirect par registre MOV AX, [BX]         AX ← mot à DS:BX\nBasé                  MOV AX, [BX + 4]     (BP utilise SS par défaut)\nIndexé                MOV AX, [SI + 10h]\nBasé indexé + dépl.   MOV AX, [BX + SI + 10h]\n\nAdresse effective (EA) = base + index + déplacement\nAdresse physique = segment × 16 + EA',
          en: 'Immediate             MOV AX, 1234h        AX ← 1234h\nRegister              MOV AX, BX           AX ← BX\nDirect                MOV AX, [0500h]      AX ← word at DS:0500h\nRegister indirect     MOV AX, [BX]         AX ← word at DS:BX\nBased                 MOV AX, [BX + 4]     (BP uses SS by default)\nIndexed               MOV AX, [SI + 10h]\nBased indexed + disp. MOV AX, [BX + SI + 10h]\n\nEffective address (EA) = base + index + displacement\nPhysical address = segment × 16 + EA',
          tr: 'Anında                MOV AX, 1234h        AX ← 1234h\nYazmaç                MOV AX, BX           AX ← BX\nDoğrudan              MOV AX, [0500h]      AX ← DS:0500h’deki kelime\nYazmaç dolaylı        MOV AX, [BX]         AX ← DS:BX’teki kelime\nTabanlı               MOV AX, [BX + 4]     (BP varsayılan olarak SS kullanır)\nİndisli               MOV AX, [SI + 10h]\nTabanlı indisli + ötel. MOV AX, [BX + SI + 10h]\n\nEtkin adres (EA) = taban + indis + öteleme\nFiziksel adres = segment × 16 + EA',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le x86 est « little-endian » : un mot de 16 bits est rangé octet faible d’abord. Si la mémoire contient 34h à l’adresse 21210h et 12h à 21211h, MOV AX, [ …] lit AX = 1234h.',
          en: 'x86 is little-endian: a 16-bit word is stored low byte first. If memory holds 34h at address 21210h and 12h at 21211h, MOV AX, [ …] reads AX = 1234h.',
          tr: 'x86 “little-endian”dır: 16 bitlik bir kelime önce düşük baytı saklanarak yazılır. Bellekte 21210h adresinde 34h ve 21211h’de 12h varsa MOV AX, [ …] AX = 1234h okur.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'DS = 2000h, BX = 1000h, SI = 0200h. Pour MOV AX, [BX + SI + 10h], donne le mode d’adressage, l’adresse effective et l’adresse physique.',
          en: 'DS = 2000h, BX = 1000h, SI = 0200h. For MOV AX, [BX + SI + 10h], give the addressing mode, the effective address and the physical address.',
          tr: 'DS = 2000h, BX = 1000h, SI = 0200h. MOV AX, [BX + SI + 10h] için adresleme modunu, etkin adresi ve fiziksel adresi ver.',
        },
        solution: {
          fr: 'C’est l’adressage basé indexé avec déplacement. EA = 1000h + 0200h + 10h = 1210h. Adresse physique = 2000h × 16 + 1210h = 20000h + 1210h = 21210h. AX reçoit l’octet de 21210h (partie basse) et celui de 21211h (partie haute).',
          en: 'It is based indexed addressing with displacement. EA = 1000h + 0200h + 10h = 1210h. Physical address = 2000h × 16 + 1210h = 20000h + 1210h = 21210h. AX gets the byte at 21210h (low part) and the one at 21211h (high part).',
          tr: 'Bu, ötelemeli tabanlı indisli adreslemedir. EA = 1000h + 0200h + 10h = 1210h. Fiziksel adres = 2000h × 16 + 1210h = 20000h + 1210h = 21210h. AX, 21210h’deki baytı (düşük kısım) ve 21211h’dekini (yüksek kısım) alır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans MOV AX, [BP + 2], quel segment est utilisé par défaut ?',
        en: 'In MOV AX, [BP + 2], which segment is used by default?',
        tr: 'MOV AX, [BP + 2] komutunda varsayılan olarak hangi segment kullanılır?',
      },
      options: { fr: ['DS', 'SS', 'CS'], en: ['DS', 'SS', 'CS'], tr: ['DS', 'SS', 'CS'] },
      answerIndex: 1,
      explanation: {
        fr: 'BP sert à accéder aux données de la pile (paramètres d’un sous-programme) : il utilise SS par défaut. BX, SI et DI utilisent DS.',
        en: 'BP is used to reach stack data (a procedure’s parameters): it uses SS by default. BX, SI and DI use DS.',
        tr: 'BP, yığın verilerine (bir alt programın parametrelerine) erişmek için kullanılır: varsayılan olarak SS kullanır. BX, SI ve DI ise DS kullanır.',
      },
    },
  },
  {
    id: 'mp-w07-assembly-debug',
    week: 7,
    title: {
      fr: 'Premier programme, DEBUG et révision de la vize',
      en: 'First program, DEBUG and midterm review',
      tr: 'İlk program, DEBUG ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un programme assembleur est écrit dans un fichier .asm, assemblé (MASM, TASM ou emu8086) en fichier objet, puis lié en exécutable. L’outil DEBUG permet d’exécuter pas à pas et de voir les registres et la mémoire.',
          en: 'An assembly program is written in an .asm file, assembled (MASM, TASM or emu8086) into an object file, then linked into an executable. The DEBUG tool lets you run step by step and see the registers and memory.',
          tr: 'Bir assembly programı .asm dosyasına yazılır, nesne dosyasına çevrilir (MASM, TASM veya emu8086), sonra çalıştırılabilir dosyaya bağlanır. DEBUG aracı adım adım çalıştırmayı ve yazmaçlarla belleği görmeyi sağlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '.MODEL SMALL\n.STACK 100h\n.DATA\nA   DW 25\nB   DW 17\nRES DW ?\n.CODE\nMAIN PROC\n     MOV AX, @DATA\n     MOV DS, AX        ; DS ne peut pas recevoir une constante directement\n     MOV AX, A\n     ADD AX, B\n     MOV RES, AX       ; RES = 42\n     MOV AH, 4Ch\n     INT 21h           ; retour au DOS\nMAIN ENDP\nEND MAIN\n\nDEBUG : R (registres)  D (afficher mémoire)  U (désassembler)\n        T (une instruction)  G (exécuter)  A (assembler)  Q (quitter)',
          en: '.MODEL SMALL\n.STACK 100h\n.DATA\nA   DW 25\nB   DW 17\nRES DW ?\n.CODE\nMAIN PROC\n     MOV AX, @DATA\n     MOV DS, AX        ; DS cannot receive a constant directly\n     MOV AX, A\n     ADD AX, B\n     MOV RES, AX       ; RES = 42\n     MOV AH, 4Ch\n     INT 21h           ; back to DOS\nMAIN ENDP\nEND MAIN\n\nDEBUG: R (registers)  D (dump memory)  U (unassemble)\n       T (one instruction)  G (go)  A (assemble)  Q (quit)',
          tr: '.MODEL SMALL\n.STACK 100h\n.DATA\nA   DW 25\nB   DW 17\nRES DW ?\n.CODE\nMAIN PROC\n     MOV AX, @DATA\n     MOV DS, AX        ; DS doğrudan sabit alamaz\n     MOV AX, A\n     ADD AX, B\n     MOV RES, AX       ; RES = 42\n     MOV AH, 4Ch\n     INT 21h           ; DOS’a dönüş\nMAIN ENDP\nEND MAIN\n\nDEBUG: R (yazmaçlar)  D (bellek göster)  U (geri çevir)\n       T (tek komut)  G (çalıştır)  A (assembly yaz)  Q (çık)',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Microprocesseur / microcontrôleur, 8085, bus et registres\n✔ PIC16F877A : Harvard, mémoires, ports, TRIS, Fosc / 4\n✔ Instructions PIC, adressage immédiat / direct / indirect / bit\n✔ Programme LED, banques (RP0), calcul d’une temporisation\n✔ 8086 : registres, segments, adresse physique\n✔ Modes d’adressage x86, EA, little-endian\n✔ Structure d’un programme .asm, DEBUG',
          en: '✔ Microprocessor / microcontroller, 8085, buses and registers\n✔ PIC16F877A: Harvard, memories, ports, TRIS, Fosc / 4\n✔ PIC instructions, immediate / direct / indirect / bit addressing\n✔ LED program, banks (RP0), computing a delay\n✔ 8086: registers, segments, physical address\n✔ x86 addressing modes, EA, little-endian\n✔ .asm program structure, DEBUG',
          tr: '✔ Mikroişlemci / mikrodenetleyici, 8085, yollar ve yazmaçlar\n✔ PIC16F877A: Harvard, bellekler, portlar, TRIS, Fosc / 4\n✔ PIC komutları, anında / doğrudan / dolaylı / bit adresleme\n✔ LED programı, banklar (RP0), gecikme hesabı\n✔ 8086: yazmaçlar, segmentler, fiziksel adres\n✔ x86 adresleme modları, EA, little-endian\n✔ .asm program yapısı, DEBUG',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Dans le programme ci-dessus, pourquoi écrit-on MOV AX, @DATA puis MOV DS, AX au lieu de MOV DS, @DATA ? Que contiennent AX et RES juste avant INT 21h ?',
          en: 'In the program above, why write MOV AX, @DATA then MOV DS, AX instead of MOV DS, @DATA? What are AX and RES just before INT 21h?',
          tr: 'Yukarıdaki programda neden MOV DS, @DATA yerine MOV AX, @DATA ve MOV DS, AX yazılır? INT 21h’den hemen önce AX ve RES kaçtır?',
        },
        solution: {
          fr: 'Le 8086 ne permet pas de charger une valeur immédiate dans un registre de segment : il faut passer par un registre général. RES = 25 + 17 = 42 (002Ah). Juste avant INT 21h, AH a été mis à 4Ch par MOV AH, 4Ch, et AL vaut encore 2Ah : AX = 4C2Ah.',
          en: 'The 8086 cannot load an immediate value into a segment register: a general register must be used. RES = 25 + 17 = 42 (002Ah). Just before INT 21h, AH was set to 4Ch by MOV AH, 4Ch, and AL is still 2Ah: AX = 4C2Ah.',
          tr: '8086 bir segment yazmacına anında değer yükleyemez: genel bir yazmaç üzerinden geçmek gerekir. RES = 25 + 17 = 42 (002Ah). INT 21h’den hemen önce AH, MOV AH, 4Ch ile 4Ch yapılmıştır ve AL hâlâ 2Ah’dir: AX = 4C2Ah.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle commande DEBUG exécute une seule instruction ?',
        en: 'Which DEBUG command runs a single instruction?',
        tr: 'Hangi DEBUG komutu tek bir komut çalıştırır?',
      },
      options: { fr: ['G', 'T', 'D'], en: ['G', 'T', 'D'], tr: ['G', 'T', 'D'] },
      answerIndex: 1,
      explanation: {
        fr: 'T (trace) exécute une instruction et affiche les registres. G (go) exécute jusqu’à la fin ou un point d’arrêt, D affiche la mémoire.',
        en: 'T (trace) runs one instruction and shows the registers. G (go) runs to the end or a breakpoint, D dumps memory.',
        tr: 'T (trace) bir komut çalıştırır ve yazmaçları gösterir. G (go) sona veya bir kesme noktasına kadar çalıştırır, D belleği gösterir.',
      },
    },
  },
  {
    id: 'mp-w08-data-transfer',
    week: 8,
    title: {
      fr: 'Instructions de transfert de données',
      en: 'Data transfer instructions',
      tr: 'Veri aktarım komutları',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'MOV  dest, src   copie src dans dest\nXCHG a, b        échange deux opérandes\nPUSH / POP       empile / dépile un mot de 16 bits\nLEA  reg, mem    charge l’ADRESSE (offset) de mem, pas son contenu\nIN / OUT         lit / écrit un port d’entrée-sortie\n\nInterdit en 8086 :\n  mémoire → mémoire           MOV [BX], [SI]\n  immédiat → segment          MOV DS, 1000h\n  tailles différentes         MOV AL, BX\n  CS comme destination        MOV CS, AX\n  PUSH d’un registre 8 bits   PUSH AL',
          en: 'MOV  dest, src   copies src into dest\nXCHG a, b        swaps two operands\nPUSH / POP       pushes / pops a 16-bit word\nLEA  reg, mem    loads the ADDRESS (offset) of mem, not its content\nIN / OUT         reads / writes an I/O port\n\nForbidden on the 8086:\n  memory → memory             MOV [BX], [SI]\n  immediate → segment         MOV DS, 1000h\n  different sizes             MOV AL, BX\n  CS as destination           MOV CS, AX\n  PUSH of an 8-bit register   PUSH AL',
          tr: 'MOV  hedef, kaynak  kaynağı hedefe kopyalar\nXCHG a, b           iki işleneni değiştirir\nPUSH / POP          16 bitlik bir kelimeyi yığına iter / çeker\nLEA  yazmaç, bellek belleğin İÇERİĞİNİ değil ADRESİNİ (ofset) yükler\nIN / OUT            bir G/Ç portunu okur / yazar\n\n8086’da yasak:\n  bellek → bellek              MOV [BX], [SI]\n  anında → segment             MOV DS, 1000h\n  farklı boyutlar              MOV AL, BX\n  hedef olarak CS              MOV CS, AX\n  8 bitlik yazmacı PUSH etmek  PUSH AL',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Différence clé entre MOV et LEA : si TABLE est à l’offset 0100h et contient 55h, MOV BX, OFFSET TABLE et LEA BX, TABLE donnent BX = 0100h, alors que MOV AL, TABLE donne AL = 55h.',
          en: 'Key difference between MOV and LEA: if TABLE is at offset 0100h and holds 55h, MOV BX, OFFSET TABLE and LEA BX, TABLE give BX = 0100h, while MOV AL, TABLE gives AL = 55h.',
          tr: 'MOV ile LEA arasındaki temel fark: TABLE 0100h ofsetindeyse ve 55h içeriyorsa MOV BX, OFFSET TABLE ve LEA BX, TABLE BX = 0100h verir, MOV AL, TABLE ise AL = 55h verir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quelles instructions sont invalides sur un 8086, et comment les corriger ? (1) MOV [BX], [SI]  (2) MOV DS, 2000h  (3) XCHG AX, BX  (4) MOV AL, BX  (5) PUSH AL',
          en: 'Which instructions are invalid on an 8086, and how can they be fixed? (1) MOV [BX], [SI]  (2) MOV DS, 2000h  (3) XCHG AX, BX  (4) MOV AL, BX  (5) PUSH AL',
          tr: '8086’da hangi komutlar geçersizdir ve nasıl düzeltilir? (1) MOV [BX], [SI]  (2) MOV DS, 2000h  (3) XCHG AX, BX  (4) MOV AL, BX  (5) PUSH AL',
        },
        solution: {
          fr: '(1) Invalide, mémoire vers mémoire : MOV AX, [SI] puis MOV [BX], AX. (2) Invalide, immédiat vers segment : MOV AX, 2000h puis MOV DS, AX. (3) Valide. (4) Invalide, 8 bits ← 16 bits : MOV AL, BL (ou MOV AX, BX). (5) Invalide, la pile travaille en mots : PUSH AX.',
          en: '(1) Invalid, memory to memory: MOV AX, [SI] then MOV [BX], AX. (2) Invalid, immediate to segment: MOV AX, 2000h then MOV DS, AX. (3) Valid. (4) Invalid, 8 bits ← 16 bits: MOV AL, BL (or MOV AX, BX). (5) Invalid, the stack works with words: PUSH AX.',
          tr: '(1) Geçersiz, bellekten belleğe: MOV AX, [SI] sonra MOV [BX], AX. (2) Geçersiz, anında değerden segmente: MOV AX, 2000h sonra MOV DS, AX. (3) Geçerli. (4) Geçersiz, 8 bit ← 16 bit: MOV AL, BL (veya MOV AX, BX). (5) Geçersiz, yığın kelimelerle çalışır: PUSH AX.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que charge LEA BX, TABLE ?',
        en: 'What does LEA BX, TABLE load?',
        tr: 'LEA BX, TABLE neyi yükler?',
      },
      options: {
        fr: ['Le contenu de TABLE', 'L’adresse (offset) de TABLE', 'La taille de TABLE'],
        en: ['The content of TABLE', 'The address (offset) of TABLE', 'The size of TABLE'],
        tr: ['TABLE’ın içeriğini', 'TABLE’ın adresini (ofsetini)', 'TABLE’ın boyutunu'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'LEA (Load Effective Address) calcule l’adresse sans lire la mémoire. On s’en sert pour préparer un pointeur, par exemple DX avant d’afficher une chaîne.',
        en: 'LEA (Load Effective Address) computes the address without reading memory. It is used to set up a pointer, for example DX before printing a string.',
        tr: 'LEA (Load Effective Address) belleği okumadan adresi hesaplar. Bir işaretçi hazırlamak için kullanılır, örneğin bir dizgiyi yazdırmadan önce DX.',
      },
    },
  },
  {
    id: 'mp-w09-arithmetic-logic',
    week: 9,
    title: {
      fr: 'Instructions arithmétiques et logiques, drapeaux',
      en: 'Arithmetic and logic instructions, flags',
      tr: 'Aritmetik ve mantık komutları, bayraklar',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'ADD, ADC (avec retenue), SUB, SBB, INC, DEC, NEG, CMP\nMUL src (non signé) : 8 bits → AX = AL × src ; 16 bits → DX:AX = AX × src\nDIV src (non signé) : 8 bits → AL = AX / src, AH = reste\nIMUL, IDIV          : versions signées\nAND, OR, XOR, NOT, TEST\nSHL / SHR (logique), SAR (arithmétique, garde le signe), ROL / ROR, RCL / RCR\n\nCF : retenue (débordement non signé)   ZF : résultat nul\nSF : bit de signe du résultat          OF : débordement signé',
          en: 'ADD, ADC (with carry), SUB, SBB, INC, DEC, NEG, CMP\nMUL src (unsigned): 8 bits → AX = AL × src; 16 bits → DX:AX = AX × src\nDIV src (unsigned): 8 bits → AL = AX / src, AH = remainder\nIMUL, IDIV        : signed versions\nAND, OR, XOR, NOT, TEST\nSHL / SHR (logical), SAR (arithmetic, keeps the sign), ROL / ROR, RCL / RCR\n\nCF: carry (unsigned overflow)      ZF: zero result\nSF: sign bit of the result         OF: signed overflow',
          tr: 'ADD, ADC (elde ile), SUB, SBB, INC, DEC, NEG, CMP\nMUL kaynak (işaretsiz): 8 bit → AX = AL × kaynak; 16 bit → DX:AX = AX × kaynak\nDIV kaynak (işaretsiz): 8 bit → AL = AX / kaynak, AH = kalan\nIMUL, IDIV           : işaretli sürümler\nAND, OR, XOR, NOT, TEST\nSHL / SHR (mantıksal), SAR (aritmetik, işareti korur), ROL / ROR, RCL / RCR\n\nCF: elde (işaretsiz taşma)        ZF: sonuç sıfır\nSF: sonucun işaret biti           OF: işaretli taşma',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Donne le résultat et les drapeaux CF, ZF, SF, OF : (1) MOV AL, 0FFh puis ADD AL, 1 ; (2) MOV AL, 7Fh puis ADD AL, 1. Puis (3) MOV AL, 20 ; MOV BL, 15 ; MUL BL et (4) MOV AX, 100 ; MOV BL, 7 ; DIV BL.',
          en: 'Give the result and the CF, ZF, SF, OF flags: (1) MOV AL, 0FFh then ADD AL, 1; (2) MOV AL, 7Fh then ADD AL, 1. Then (3) MOV AL, 20; MOV BL, 15; MUL BL and (4) MOV AX, 100; MOV BL, 7; DIV BL.',
          tr: 'Sonucu ve CF, ZF, SF, OF bayraklarını ver: (1) MOV AL, 0FFh sonra ADD AL, 1; (2) MOV AL, 7Fh sonra ADD AL, 1. Sonra (3) MOV AL, 20; MOV BL, 15; MUL BL ve (4) MOV AX, 100; MOV BL, 7; DIV BL.',
        },
        solution: {
          fr: '(1) FFh + 1 = 100h, AL = 00h : CF = 1 (retenue), ZF = 1, SF = 0, OF = 0 (en signé, −1 + 1 = 0 est correct). (2) 7Fh + 1 = 80h : CF = 0, ZF = 0, SF = 1, OF = 1 (en signé, 127 + 1 donne −128 : débordement). (3) AX = 20 × 15 = 300 = 012Ch. (4) 100 / 7 : AL = 14 (0Eh), AH = 2 (le reste).',
          en: '(1) FFh + 1 = 100h, AL = 00h: CF = 1 (carry), ZF = 1, SF = 0, OF = 0 (signed, −1 + 1 = 0 is correct). (2) 7Fh + 1 = 80h: CF = 0, ZF = 0, SF = 1, OF = 1 (signed, 127 + 1 gives −128: overflow). (3) AX = 20 × 15 = 300 = 012Ch. (4) 100 / 7: AL = 14 (0Eh), AH = 2 (the remainder).',
          tr: '(1) FFh + 1 = 100h, AL = 00h: CF = 1 (elde), ZF = 1, SF = 0, OF = 0 (işaretli olarak −1 + 1 = 0 doğrudur). (2) 7Fh + 1 = 80h: CF = 0, ZF = 0, SF = 1, OF = 1 (işaretli olarak 127 + 1, −128 verir: taşma). (3) AX = 20 × 15 = 300 = 012Ch. (4) 100 / 7: AL = 14 (0Eh), AH = 2 (kalan).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel drapeau signale un débordement en arithmétique signée ?',
        en: 'Which flag signals an overflow in signed arithmetic?',
        tr: 'Hangi bayrak işaretli aritmetikte taşmayı gösterir?',
      },
      options: { fr: ['CF', 'OF', 'ZF'], en: ['CF', 'OF', 'ZF'], tr: ['CF', 'OF', 'ZF'] },
      answerIndex: 1,
      explanation: {
        fr: 'OF (overflow) indique que le résultat signé est faux, par exemple 127 + 1. CF concerne les nombres non signés.',
        en: 'OF (overflow) says the signed result is wrong, for example 127 + 1. CF is about unsigned numbers.',
        tr: 'OF (overflow) işaretli sonucun yanlış olduğunu gösterir, örneğin 127 + 1. CF işaretsiz sayılarla ilgilidir.',
      },
    },
  },
  {
    id: 'mp-w10-control',
    week: 10,
    title: {
      fr: 'Sauts, comparaisons et boucles',
      en: 'Jumps, comparisons and loops',
      tr: 'Atlamalar, karşılaştırmalar ve döngüler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'CMP a, b calcule a − b sans garder le résultat : seuls les drapeaux changent. Un saut conditionnel les lit ensuite. Attention : JA / JB comparent des nombres non signés, JG / JL des nombres signés.',
          en: 'CMP a, b computes a − b without keeping the result: only the flags change. A conditional jump then reads them. Careful: JA / JB compare unsigned numbers, JG / JL signed numbers.',
          tr: 'CMP a, b sonucu saklamadan a − b hesaplar: yalnızca bayraklar değişir. Ardından koşullu bir atlama onları okur. Dikkat: JA / JB işaretsiz sayıları, JG / JL işaretli sayıları karşılaştırır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'JMP étiquette          saut inconditionnel\nJE / JZ, JNE / JNZ     égal / différent (ZF)\nJA, JAE, JB, JBE       non signé (au-dessus / au-dessous)\nJG, JGE, JL, JLE       signé (plus grand / plus petit)\nLOOP étiquette         CX ← CX − 1 ; saute si CX ≠ 0\n\n      MOV CX, 10\n      MOV AX, 0\nL1:   ADD AX, CX\n      LOOP L1          ; AX = 10 + 9 + … + 1',
          en: 'JMP label             unconditional jump\nJE / JZ, JNE / JNZ    equal / not equal (ZF)\nJA, JAE, JB, JBE      unsigned (above / below)\nJG, JGE, JL, JLE      signed (greater / less)\nLOOP label            CX ← CX − 1; jumps if CX ≠ 0\n\n      MOV CX, 10\n      MOV AX, 0\nL1:   ADD AX, CX\n      LOOP L1          ; AX = 10 + 9 + … + 1',
          tr: 'JMP etiket            koşulsuz atlama\nJE / JZ, JNE / JNZ    eşit / eşit değil (ZF)\nJA, JAE, JB, JBE      işaretsiz (üstünde / altında)\nJG, JGE, JL, JLE      işaretli (büyük / küçük)\nLOOP etiket           CX ← CX − 1; CX ≠ 0 ise atlar\n\n      MOV CX, 10\n      MOV AX, 0\nL1:   ADD AX, CX\n      LOOP L1          ; AX = 10 + 9 + … + 1',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Que vaut AX à la fin de la boucle ci-dessus ? (2) AL = 0FFh, BL = 01h, puis CMP AL, BL. Le saut JA est-il pris ? Et JG ?',
          en: '(1) What is AX at the end of the loop above? (2) AL = 0FFh, BL = 01h, then CMP AL, BL. Is JA taken? And JG?',
          tr: '(1) Yukarıdaki döngünün sonunda AX kaçtır? (2) AL = 0FFh, BL = 01h, sonra CMP AL, BL. JA atlaması gerçekleşir mi? JG?',
        },
        solution: {
          fr: '(1) La boucle ajoute 10, 9, …, 1 : AX = 55 = 0037h, et CX finit à 0. (2) En non signé, FFh = 255 > 1 : JA est pris. En signé, FFh = −1 < 1 : JG n’est pas pris. Les mêmes bits donnent deux réponses : il faut choisir le saut selon le type des données.',
          en: '(1) The loop adds 10, 9, …, 1: AX = 55 = 0037h, and CX ends at 0. (2) Unsigned, FFh = 255 > 1: JA is taken. Signed, FFh = −1 < 1: JG is not taken. The same bits give two answers: choose the jump according to the data type.',
          tr: '(1) Döngü 10, 9, …, 1 ekler: AX = 55 = 0037h ve CX 0’da biter. (2) İşaretsiz olarak FFh = 255 > 1: JA gerçekleşir. İşaretli olarak FFh = −1 < 1: JG gerçekleşmez. Aynı bitler iki farklı cevap verir: atlama veri türüne göre seçilmelidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait l’instruction LOOP ?',
        en: 'What does the LOOP instruction do?',
        tr: 'LOOP komutu ne yapar?',
      },
      options: {
        fr: ['Elle saute toujours', 'Elle décrémente CX et saute si CX ≠ 0', 'Elle incrémente CX et saute si CX = 0'],
        en: ['It always jumps', 'It decrements CX and jumps if CX ≠ 0', 'It increments CX and jumps if CX = 0'],
        tr: ['Her zaman atlar', 'CX’i azaltır ve CX ≠ 0 ise atlar', 'CX’i artırır ve CX = 0 ise atlar'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'LOOP utilise CX comme compteur : il le décrémente, puis saute tant qu’il n’est pas nul. Si CX vaut 0 au départ, la boucle tourne 65 536 fois.',
        en: 'LOOP uses CX as a counter: it decrements it, then jumps while it is not zero. If CX starts at 0, the loop runs 65,536 times.',
        tr: 'LOOP, CX’i sayaç olarak kullanır: onu azaltır, sıfır olmadığı sürece atlar. CX 0’dan başlarsa döngü 65.536 kez döner.',
      },
    },
  },
  {
    id: 'mp-w11-procedures-stack',
    week: 11,
    title: {
      fr: 'Sous-programmes et pile',
      en: 'Procedures and the stack',
      tr: 'Alt programlar ve yığın',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La pile se trouve à SS:SP et grandit vers les adresses basses. PUSH fait SP ← SP − 2 puis range le mot ; POP lit le mot puis fait SP ← SP + 2. CALL empile l’adresse de retour (IP, et aussi CS pour un appel FAR) puis saute ; RET la dépile.',
          en: 'The stack lives at SS:SP and grows toward lower addresses. PUSH does SP ← SP − 2 then stores the word; POP reads the word then does SP ← SP + 2. CALL pushes the return address (IP, plus CS for a FAR call) then jumps; RET pops it.',
          tr: 'Yığın SS:SP’de bulunur ve düşük adreslere doğru büyür. PUSH önce SP ← SP − 2 yapar sonra kelimeyi yazar; POP kelimeyi okur sonra SP ← SP + 2 yapar. CALL dönüş adresini (IP, FAR çağrıda CS de) yığına iter ve atlar; RET onu çeker.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'CARRE  PROC NEAR          ; AX ← AX × AX\n       PUSH BX            ; sauvegarder les registres utilisés\n       MOV  BX, AX\n       MUL  BX\n       POP  BX            ; restaurer dans l’ordre inverse\n       RET\nCARRE  ENDP\n\n       MOV AX, 12\n       CALL CARRE         ; AX = 144',
          en: 'SQUARE PROC NEAR          ; AX ← AX × AX\n       PUSH BX            ; save the registers used\n       MOV  BX, AX\n       MUL  BX\n       POP  BX            ; restore in reverse order\n       RET\nSQUARE ENDP\n\n       MOV AX, 12\n       CALL SQUARE        ; AX = 144',
          tr: 'KARE   PROC NEAR          ; AX ← AX × AX\n       PUSH BX            ; kullanılan yazmaçları sakla\n       MOV  BX, AX\n       MUL  BX\n       POP  BX            ; ters sırada geri yükle\n       RET\nKARE   ENDP\n\n       MOV AX, 12\n       CALL KARE          ; AX = 144',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Au départ SP = 0100h. On exécute PUSH AX, PUSH BX, puis un CALL NEAR, puis dans le sous-programme RET, et enfin POP BX et POP AX. Donne SP après chaque instruction.',
          en: 'At the start SP = 0100h. The program runs PUSH AX, PUSH BX, then a NEAR CALL, then RET in the procedure, and finally POP BX and POP AX. Give SP after each instruction.',
          tr: 'Başlangıçta SP = 0100h. PUSH AX, PUSH BX, sonra bir NEAR CALL, alt programda RET ve son olarak POP BX ve POP AX çalışıyor. Her komuttan sonra SP’yi ver.',
        },
        solution: {
          fr: 'PUSH AX : 00FEh. PUSH BX : 00FCh. CALL NEAR (empile IP) : 00FAh. RET (dépile IP) : 00FCh. POP BX : 00FEh. POP AX : 0100h. La pile revient exactement à son état de départ ; il faut dépiler dans l’ordre inverse (dernier entré, premier sorti), sinon AX et BX seraient échangés.',
          en: 'PUSH AX: 00FEh. PUSH BX: 00FCh. NEAR CALL (pushes IP): 00FAh. RET (pops IP): 00FCh. POP BX: 00FEh. POP AX: 0100h. The stack goes back exactly to its starting state; you must pop in reverse order (last in, first out), otherwise AX and BX would be swapped.',
          tr: 'PUSH AX: 00FEh. PUSH BX: 00FCh. NEAR CALL (IP’yi iter): 00FAh. RET (IP’yi çeker): 00FCh. POP BX: 00FEh. POP AX: 0100h. Yığın tam olarak başlangıç durumuna döner; ters sırada çekmek gerekir (son giren ilk çıkar), aksi halde AX ile BX yer değiştirirdi.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait PUSH AX sur le pointeur de pile SP ?',
        en: 'What does PUSH AX do to the stack pointer SP?',
        tr: 'PUSH AX, yığın işaretçisi SP’ye ne yapar?',
      },
      options: {
        fr: ['SP augmente de 2', 'SP diminue de 2', 'SP ne change pas'],
        en: ['SP increases by 2', 'SP decreases by 2', 'SP does not change'],
        tr: ['SP 2 artar', 'SP 2 azalır', 'SP değişmez'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'La pile du x86 grandit vers le bas : chaque PUSH d’un mot de 16 bits retire 2 à SP, chaque POP ajoute 2.',
        en: 'The x86 stack grows downward: each PUSH of a 16-bit word subtracts 2 from SP, each POP adds 2.',
        tr: 'x86 yığını aşağı doğru büyür: 16 bitlik bir kelimenin her PUSH’u SP’den 2 çıkarır, her POP 2 ekler.',
      },
    },
  },
  {
    id: 'mp-w12-interrupts',
    week: 12,
    title: { fr: 'Les interruptions', en: 'Interrupts', tr: 'Kesmeler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une interruption suspend le programme pour exécuter une routine de service, puis le reprend. Elle peut être matérielle (clavier, timer, broche INTR ou NMI), logicielle (instruction INT n) ou une exception (division par zéro, INT 0).',
          en: 'An interrupt suspends the program to run a service routine, then resumes it. It can be hardware (keyboard, timer, INTR or NMI pin), software (the INT n instruction) or an exception (division by zero, INT 0).',
          tr: 'Kesme, bir hizmet rutinini çalıştırmak için programı askıya alır, sonra kaldığı yerden devam ettirir. Donanımsal (klavye, zamanlayıcı, INTR veya NMI pini), yazılımsal (INT n komutu) veya bir istisna (sıfıra bölme, INT 0) olabilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Table des vecteurs d’interruption (IVT) : 0000:0000 à 0000:03FF\n256 vecteurs × 4 octets (IP puis CS) → adresse du vecteur n = n × 4\n\nÀ l’exécution de INT n :\n1. empiler FLAGS, puis CS, puis IP\n2. IF ← 0 et TF ← 0\n3. IP ← [n × 4], CS ← [n × 4 + 2]\nIRET : dépile IP, CS et FLAGS',
          en: 'Interrupt vector table (IVT): 0000:0000 to 0000:03FF\n256 vectors × 4 bytes (IP then CS) → address of vector n = n × 4\n\nWhen INT n runs:\n1. push FLAGS, then CS, then IP\n2. IF ← 0 and TF ← 0\n3. IP ← [n × 4], CS ← [n × 4 + 2]\nIRET: pops IP, CS and FLAGS',
          tr: 'Kesme vektör tablosu (IVT): 0000:0000 - 0000:03FF\n256 vektör × 4 bayt (önce IP sonra CS) → n vektörünün adresi = n × 4\n\nINT n çalışınca:\n1. FLAGS, sonra CS, sonra IP yığına itilir\n2. IF ← 0 ve TF ← 0\n3. IP ← [n × 4], CS ← [n × 4 + 2]\nIRET: IP, CS ve FLAGS’i yığından çeker',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) À quelle adresse se trouve le vecteur de INT 21h ? Et celui de INT 10h ? (2) Combien d’octets INT n empile-t-il, et pourquoi faut-il terminer la routine par IRET et non par RET ?',
          en: '(1) At which address is the INT 21h vector? And INT 10h’s? (2) How many bytes does INT n push, and why must the routine end with IRET rather than RET?',
          tr: '(1) INT 21h’nin vektörü hangi adrestedir? INT 10h’ninki? (2) INT n kaç bayt iter ve rutin neden RET değil IRET ile bitmelidir?',
        },
        solution: {
          fr: '(1) 21h × 4 = 84h : vecteur à 0000:0084h. 10h × 4 = 40h : vecteur à 0000:0040h. (2) 6 octets : FLAGS, CS et IP (3 mots). RET ne dépilerait que IP (ou IP et CS) : les drapeaux ne seraient pas restaurés et la pile serait décalée. IRET dépile les trois.',
          en: '(1) 21h × 4 = 84h: vector at 0000:0084h. 10h × 4 = 40h: vector at 0000:0040h. (2) 6 bytes: FLAGS, CS and IP (3 words). RET would only pop IP (or IP and CS): the flags would not be restored and the stack would be off. IRET pops all three.',
          tr: '(1) 21h × 4 = 84h: vektör 0000:0084h’de. 10h × 4 = 40h: vektör 0000:0040h’de. (2) 6 bayt: FLAGS, CS ve IP (3 kelime). RET yalnızca IP’yi (veya IP ve CS’yi) çekerdi: bayraklar geri yüklenmez ve yığın kayardı. IRET üçünü de çeker.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien d’octets occupe la table des vecteurs d’interruption du 8086 ?',
        en: 'How many bytes does the 8086 interrupt vector table take?',
        tr: '8086’nın kesme vektör tablosu kaç bayt yer kaplar?',
      },
      options: { fr: ['256', '1024', '4096'], en: ['256', '1024', '4096'], tr: ['256', '1024', '4096'] },
      answerIndex: 1,
      explanation: {
        fr: '256 vecteurs de 4 octets : 1024 octets, de l’adresse 00000h à 003FFh.',
        en: '256 vectors of 4 bytes: 1024 bytes, from address 00000h to 003FFh.',
        tr: '4 baytlık 256 vektör: 00000h’den 003FFh’ye kadar 1024 bayt.',
      },
    },
  },
  {
    id: 'mp-w13-io',
    week: 13,
    title: {
      fr: 'Entrées-sorties et services DOS (INT 21h)',
      en: 'Input-output and DOS services (INT 21h)',
      tr: 'Giriş-çıkış ve DOS hizmetleri (INT 21h)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le 8086 a un espace d’E/S séparé de la mémoire (E/S isolées) : on y accède avec IN et OUT, sur 65 536 ports. Une autre méthode, les E/S en mémoire (memory-mapped), place les registres des périphériques dans l’espace mémoire. Pour les programmes simples, on passe par les services du DOS avec INT 21h.',
          en: 'The 8086 has an I/O space separate from memory (isolated I/O): it is accessed with IN and OUT, over 65,536 ports. Another method, memory-mapped I/O, places device registers in the memory space. Simple programs use DOS services through INT 21h.',
          tr: '8086’nın bellekten ayrı bir G/Ç alanı vardır (yalıtılmış G/Ç): 65.536 port üzerinde IN ve OUT ile erişilir. Diğer bir yöntem olan bellek eşlemeli G/Ç, aygıt yazmaçlarını bellek alanına yerleştirir. Basit programlar INT 21h ile DOS hizmetlerini kullanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'INT 21h, fonction choisie dans AH\nAH = 01h : lire un caractère au clavier (avec écho) → AL\nAH = 02h : afficher le caractère contenu dans DL\nAH = 09h : afficher la chaîne pointée par DS:DX, terminée par \'$\'\nAH = 4Ch : terminer le programme\n\nMSG  DB \'Merhaba$\'\n     MOV AH, 09h\n     LEA DX, MSG\n     INT 21h',
          en: 'INT 21h, function chosen in AH\nAH = 01h: read a key with echo → AL\nAH = 02h: print the character in DL\nAH = 09h: print the string at DS:DX, ended by \'$\'\nAH = 4Ch: end the program\n\nMSG  DB \'Hello$\'\n     MOV AH, 09h\n     LEA DX, MSG\n     INT 21h',
          tr: 'INT 21h, işlev AH ile seçilir\nAH = 01h: klavyeden karakter oku (yankılı) → AL\nAH = 02h: DL’deki karakteri yazdır\nAH = 09h: DS:DX’teki \'$\' ile biten dizgiyi yazdır\nAH = 4Ch: programı bitir\n\nMSG  DB \'Merhaba$\'\n     MOV AH, 09h\n     LEA DX, MSG\n     INT 21h',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris un programme qui lit un chiffre au clavier (0 à 9) et affiche le chiffre suivant (on suppose une entrée de 0 à 8, pour que le résultat reste un seul chiffre).',
          en: 'Write a program that reads a digit from the keyboard (0 to 9) and prints the next digit (assume an input from 0 to 8, so the result stays one digit).',
          tr: 'Klavyeden bir rakam (0-9) okuyup bir sonraki rakamı yazdıran bir program yaz (sonuç tek basamak kalsın diye girişin 0-8 arası olduğunu varsay).',
        },
        solution: {
          fr: 'MOV AH, 01h / INT 21h → AL contient le code ASCII (par ex. \'4\' = 34h). INC AL → \'5\' = 35h ; inutile de convertir, car les codes ASCII des chiffres se suivent. MOV DL, AL / MOV AH, 02h / INT 21h affiche le caractère. MOV AH, 4Ch / INT 21h termine. Pour faire un vrai calcul, on convertirait avec SUB AL, 30h puis ADD AL, 30h.',
          en: 'MOV AH, 01h / INT 21h → AL holds the ASCII code (e.g. \'4\' = 34h). INC AL → \'5\' = 35h; no conversion needed, since digit ASCII codes are consecutive. MOV DL, AL / MOV AH, 02h / INT 21h prints the character. MOV AH, 4Ch / INT 21h ends. For real arithmetic, convert with SUB AL, 30h then ADD AL, 30h.',
          tr: 'MOV AH, 01h / INT 21h → AL, ASCII kodunu içerir (örn. \'4\' = 34h). INC AL → \'5\' = 35h; rakamların ASCII kodları ardışık olduğundan dönüştürmeye gerek yok. MOV DL, AL / MOV AH, 02h / INT 21h karakteri yazdırır. MOV AH, 4Ch / INT 21h bitirir. Gerçek bir hesap için SUB AL, 30h ve sonra ADD AL, 30h ile dönüştürülür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Par quel caractère doit se terminer une chaîne affichée avec AH = 09h ?',
        en: 'Which character must end a string printed with AH = 09h?',
        tr: 'AH = 09h ile yazdırılan bir dizgi hangi karakterle bitmelidir?',
      },
      options: { fr: ['0', '$', '.'], en: ['0', '$', '.'], tr: ['0', '$', '.'] },
      answerIndex: 1,
      explanation: {
        fr: 'La fonction 09h du DOS affiche les caractères jusqu’au premier \'$\'. Si on l’oublie, elle affiche la mémoire qui suit jusqu’à en trouver un.',
        en: 'DOS function 09h prints characters up to the first \'$\'. If it is missing, it prints the memory that follows until it finds one.',
        tr: 'DOS’un 09h işlevi karakterleri ilk \'$\' işaretine kadar yazdırır. Unutulursa, bir tane bulana kadar sonraki belleği yazdırır.',
      },
    },
  },
  {
    id: 'mp-w14-screen-keyboard',
    week: 14,
    title: {
      fr: 'Écran et clavier (BIOS), révision du final',
      en: 'Screen and keyboard (BIOS), final review',
      tr: 'Ekran ve klavye (BIOS), final tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'BIOS écran, INT 10h\nAH = 00h : choisir le mode vidéo (AL = 03h : texte 80 × 25)\nAH = 02h : placer le curseur (DH = ligne, DL = colonne, BH = page)\nAH = 0Eh : afficher le caractère de AL (mode télétype)\n\nBIOS clavier, INT 16h\nAH = 00h : attendre une touche → AL = code ASCII, AH = code de balayage',
          en: 'BIOS screen, INT 10h\nAH = 00h: set the video mode (AL = 03h: 80 × 25 text)\nAH = 02h: set the cursor (DH = row, DL = column, BH = page)\nAH = 0Eh: print the character in AL (teletype mode)\n\nBIOS keyboard, INT 16h\nAH = 00h: wait for a key → AL = ASCII code, AH = scan code',
          tr: 'BIOS ekran, INT 10h\nAH = 00h: video modunu seç (AL = 03h: 80 × 25 metin)\nAH = 02h: imleci yerleştir (DH = satır, DL = sütun, BH = sayfa)\nAH = 0Eh: AL’deki karakteri yazdır (teletype modu)\n\nBIOS klavye, INT 16h\nAH = 00h: bir tuş bekle → AL = ASCII kodu, AH = tarama kodu',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ MOV, XCHG, LEA, PUSH / POP, IN / OUT et leurs restrictions\n✔ ADD, SUB, MUL, DIV, logique, décalages ; CF, ZF, SF, OF\n✔ CMP et sauts signés / non signés, LOOP et CX\n✔ PROC, CALL / RET, pile (SP − 2 / SP + 2), ordre des POP\n✔ Interruptions : IVT, n × 4, INT / IRET\n✔ INT 21h : 01h, 02h, 09h, 4Ch\n✔ INT 10h et INT 16h : écran et clavier',
          en: '✔ MOV, XCHG, LEA, PUSH / POP, IN / OUT and their restrictions\n✔ ADD, SUB, MUL, DIV, logic, shifts; CF, ZF, SF, OF\n✔ CMP and signed / unsigned jumps, LOOP and CX\n✔ PROC, CALL / RET, stack (SP − 2 / SP + 2), POP order\n✔ Interrupts: IVT, n × 4, INT / IRET\n✔ INT 21h: 01h, 02h, 09h, 4Ch\n✔ INT 10h and INT 16h: screen and keyboard',
          tr: '✔ MOV, XCHG, LEA, PUSH / POP, IN / OUT ve kısıtları\n✔ ADD, SUB, MUL, DIV, mantık, kaydırma; CF, ZF, SF, OF\n✔ CMP ve işaretli / işaretsiz atlamalar, LOOP ve CX\n✔ PROC, CALL / RET, yığın (SP − 2 / SP + 2), POP sırası\n✔ Kesmeler: IVT, n × 4, INT / IRET\n✔ INT 21h: 01h, 02h, 09h, 4Ch\n✔ INT 10h ve INT 16h: ekran ve klavye',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris un programme qui attend une touche (INT 16h) et l’affiche en majuscule avec INT 10h si c’est une lettre minuscule, telle quelle sinon.',
          en: 'Write a program that waits for a key (INT 16h) and prints it in uppercase with INT 10h if it is a lowercase letter, unchanged otherwise.',
          tr: 'Bir tuş bekleyen (INT 16h) ve küçük harfse INT 10h ile büyük harf olarak, değilse olduğu gibi yazdıran bir program yaz.',
        },
        code: '      MOV AH, 00h\n      INT 16h          ; AL = ASCII\n      CMP AL, \'a\'\n      JB  SHOW         ; < \'a\'\n      CMP AL, \'z\'\n      JA  SHOW         ; > \'z\'\n      SUB AL, 20h      ; \'a\' (61h) → \'A\' (41h)\nSHOW: MOV AH, 0Eh\n      INT 10h\n      MOV AH, 4Ch\n      INT 21h',
        solution: {
          fr: 'Le programme ci-dessus : INT 16h lit la touche dans AL. On vérifie que AL est entre \'a\' (61h) et \'z\' (7Ah) avec deux comparaisons non signées (JB, JA). Une minuscule et sa majuscule diffèrent de 20h en ASCII : SUB AL, 20h. Puis AH = 0Eh et INT 10h affichent AL. Exemple : \'k\' (6Bh) devient \'K\' (4Bh), \'5\' reste \'5\'.',
          en: 'The program above: INT 16h reads the key into AL. Check that AL is between \'a\' (61h) and \'z\' (7Ah) with two unsigned comparisons (JB, JA). A lowercase letter and its uppercase differ by 20h in ASCII: SUB AL, 20h. Then AH = 0Eh and INT 10h print AL. Example: \'k\' (6Bh) becomes \'K\' (4Bh), \'5\' stays \'5\'.',
          tr: 'Yukarıdaki program: INT 16h tuşu AL’ye okur. AL’nin \'a\' (61h) ile \'z\' (7Ah) arasında olduğu iki işaretsiz karşılaştırmayla (JB, JA) kontrol edilir. ASCII’de küçük harf ile büyük harfi arasında 20h fark vardır: SUB AL, 20h. Sonra AH = 0Eh ve INT 10h AL’yi yazdırır. Örnek: \'k\' (6Bh), \'K\' (4Bh) olur; \'5\', \'5\' kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Après INT 16h avec AH = 00h, où se trouve le code ASCII de la touche ?',
        en: 'After INT 16h with AH = 00h, where is the key’s ASCII code?',
        tr: 'AH = 00h ile INT 16h’den sonra tuşun ASCII kodu nerededir?',
      },
      options: { fr: ['AL', 'AH', 'DL'], en: ['AL', 'AH', 'DL'], tr: ['AL', 'AH', 'DL'] },
      answerIndex: 0,
      explanation: {
        fr: 'AL reçoit le code ASCII et AH le code de balayage (scan code), qui identifie la touche physique, utile pour les flèches et les touches de fonction.',
        en: 'AL gets the ASCII code and AH the scan code, which identifies the physical key, useful for arrows and function keys.',
        tr: 'AL ASCII kodunu, AH ise fiziksel tuşu tanımlayan tarama kodunu alır; oklar ve işlev tuşları için kullanışlıdır.',
      },
    },
  },
];
