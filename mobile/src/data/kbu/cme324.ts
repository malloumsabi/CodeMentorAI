/**
 * CME324 Operating Systems, 14 weeks following Silberschatz: processes, threads, CPU scheduling and
 * synchronization before the midterm; deadlocks, memory, paging, virtual memory, file systems and disk
 * scheduling before the final. Every numeric answer was checked with Python.
 * Weeks 2, 4 and 8 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const cme324Lessons: LessonSource[] = [
  {
    id: 'os-w01-intro',
    week: 1,
    title: {
      fr: 'Rôle d’un système d’exploitation et appels système',
      en: 'What an operating system does and system calls',
      tr: 'İşletim sisteminin görevi ve sistem çağrıları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le système d’exploitation (Windows, Linux, Android) est l’intermédiaire entre les programmes et le matériel. Il gère le processeur (quel programme tourne), la mémoire, les fichiers et les périphériques, et protège les programmes les uns des autres. Le noyau tourne en mode privilégié (mode noyau) ; les programmes en mode utilisateur. Pour lire un fichier ou créer un processus, un programme fait un appel système, qui bascule en mode noyau.',
          en: 'The operating system (Windows, Linux, Android) sits between programs and hardware. It manages the processor (which program runs), memory, files and devices, and protects programs from each other. The kernel runs in privileged mode (kernel mode); programs run in user mode. To read a file or create a process, a program makes a system call, which switches to kernel mode.',
          tr: 'İşletim sistemi (Windows, Linux, Android) programlar ile donanım arasındaki aracıdır. İşlemciyi (hangi program çalışır), belleği, dosyaları ve aygıtları yönetir ve programları birbirinden korur. Çekirdek ayrıcalıklı kipte (çekirdek kipi), programlar kullanıcı kipinde çalışır. Bir dosyayı okumak veya bir süreç oluşturmak için program bir sistem çağrısı yapar; bu, çekirdek kipine geçirir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Appels système POSIX (Linux)\nprocessus : fork(), exec(), wait(), exit(), getpid()\nfichiers  : open(), read(), write(), close()\nmémoire   : mmap(), brk()\n\nprintf("Bonjour")          ← fonction de la bibliothèque C (mode utilisateur)\n   └→ write(1, "Bonjour", 7)   ← appel système (passage en mode noyau)\n\nStructures : monolithique (Linux), micronoyau (Minix, QNX), modulaire, hybride (Windows, macOS)\nInterruption : signal du matériel (clavier, disque, minuterie) traité par le noyau',
          en: 'POSIX system calls (Linux)\nprocesses: fork(), exec(), wait(), exit(), getpid()\nfiles    : open(), read(), write(), close()\nmemory   : mmap(), brk()\n\nprintf("Hello")            ← C library function (user mode)\n   └→ write(1, "Hello", 5)     ← system call (switch to kernel mode)\n\nStructures: monolithic (Linux), microkernel (Minix, QNX), modular, hybrid (Windows, macOS)\nInterrupt: a hardware signal (keyboard, disk, timer) handled by the kernel',
          tr: 'POSIX sistem çağrıları (Linux)\nsüreçler: fork(), exec(), wait(), exit(), getpid()\ndosyalar: open(), read(), write(), close()\nbellek  : mmap(), brk()\n\nprintf("Merhaba")          ← C kütüphanesi fonksiyonu (kullanıcı kipi)\n   └→ write(1, "Merhaba", 7)   ← sistem çağrısı (çekirdek kipine geçiş)\n\nYapılar: tek parça (Linux), mikro çekirdek (Minix, QNX), modüler, karma (Windows, macOS)\nKesme: çekirdeğin işlediği donanım sinyali (klavye, disk, zamanlayıcı)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour chaque action, dis si elle se fait en mode utilisateur ou si elle demande un appel système : (1) calculer une moyenne dans un tableau ; (2) écrire le résultat dans un fichier ; (3) appeler strlen ; (4) envoyer un message réseau. Pourquoi un programme ne peut-il pas accéder directement au disque ?',
          en: 'For each action, say whether it runs in user mode or needs a system call: (1) computing an average in an array; (2) writing the result to a file; (3) calling strlen; (4) sending a network message. Why can’t a program access the disk directly?',
          tr: 'Her eylem için kullanıcı kipinde mi çalıştığını yoksa sistem çağrısı mı gerektirdiğini söyle: (1) bir dizide ortalama hesaplamak; (2) sonucu bir dosyaya yazmak; (3) strlen çağırmak; (4) ağ üzerinden mesaj göndermek. Bir program neden diske doğrudan erişemez?',
        },
        solution: {
          fr: '(1) Mode utilisateur : un simple calcul en mémoire. (2) Appel système (open, write). (3) Mode utilisateur : strlen parcourt la mémoire du programme, sans aide du noyau. (4) Appel système (send ou write sur un socket). Le disque est partagé entre tous les programmes : seul le noyau peut y accéder, pour vérifier les droits et empêcher un programme de lire ou d’écraser les fichiers des autres.',
          en: '(1) User mode: a plain computation in memory. (2) System call (open, write). (3) User mode: strlen walks the program’s memory with no help from the kernel. (4) System call (send, or write on a socket). The disk is shared by every program: only the kernel may touch it, to check permissions and stop a program from reading or overwriting others’ files.',
          tr: '(1) Kullanıcı kipi: bellekte basit bir hesap. (2) Sistem çağrısı (open, write). (3) Kullanıcı kipi: strlen, çekirdeğin yardımı olmadan programın belleğini dolaşır. (4) Sistem çağrısı (send veya bir soket üzerinde write). Disk tüm programlarca paylaşılır: yetkileri denetlemek ve bir programın başkalarının dosyalarını okumasını ya da ezmesini önlemek için yalnızca çekirdek erişebilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que se passe-t-il lors d’un appel système ?',
        en: 'What happens during a system call?',
        tr: 'Bir sistem çağrısı sırasında ne olur?',
      },
      options: {
        fr: ['Le programme passe en mode noyau pour un service du système', 'Le programme redémarre', 'Le compilateur génère du code'],
        en: ['The program switches to kernel mode for an OS service', 'The program restarts', 'The compiler generates code'],
        tr: ['Program bir sistem hizmeti için çekirdek kipine geçer', 'Program yeniden başlar', 'Derleyici kod üretir'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'L’appel système est la porte d’entrée contrôlée vers le noyau : le processeur passe en mode privilégié, le noyau fait le travail, puis revient au programme.',
        en: 'A system call is the controlled doorway into the kernel: the CPU switches to privileged mode, the kernel does the work, then returns to the program.',
        tr: 'Sistem çağrısı çekirdeğe denetimli giriş kapısıdır: işlemci ayrıcalıklı kipe geçer, çekirdek işi yapar, sonra programa döner.',
      },
    },
  },
  {
    id: 'os-processes',
    week: 2,
    title: { fr: 'Les processus', en: 'Processes', tr: 'Süreçler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un processus est un programme en cours d’exécution : son code, ses données, sa pile et l’état du processeur. Le noyau le décrit dans un bloc de contrôle (PCB) : identifiant (PID), état, registres, compteur ordinal, mémoire, fichiers ouverts. Changer de processus (changement de contexte) oblige à sauvegarder un PCB et à en restaurer un autre. Sous Linux, fork() crée une copie du processus : il renvoie 0 dans le fils et le PID du fils dans le père.',
          en: 'A process is a running program: its code, data, stack and CPU state. The kernel describes it in a process control block (PCB): identifier (PID), state, registers, program counter, memory, open files. Switching processes (a context switch) means saving one PCB and restoring another. On Linux, fork() creates a copy of the process: it returns 0 in the child and the child’s PID in the parent.',
          tr: 'Süreç, çalışmakta olan bir programdır: kodu, verileri, yığını ve işlemci durumu. Çekirdek onu bir süreç denetim bloğunda (PCB) tanımlar: kimlik (PID), durum, yazmaçlar, program sayacı, bellek, açık dosyalar. Süreç değiştirmek (bağlam değişimi) bir PCB’yi kaydedip başka birini geri yüklemek demektir. Linux’ta fork() sürecin bir kopyasını oluşturur: çocukta 0, ebeveynde çocuğun PID’ini döndürür.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'États :  nouveau → prêt ⇄ en exécution → terminé\n                       ↑            ↓\n                       └── en attente (E/S)\n\npid_t pid = fork();\nif (pid == 0) {\n    printf("fils\\n");                // exécuté par le fils\n    execlp("ls", "ls", NULL);         // remplace le code du fils par ls\n} else if (pid > 0) {\n    wait(NULL);                       // le père attend la fin du fils\n    printf("père : fils terminé\\n");\n}\n// Zombie : fils terminé, mais le père n’a pas encore appelé wait',
          en: 'States:  new → ready ⇄ running → terminated\n                  ↑          ↓\n                  └── waiting (I/O)\n\npid_t pid = fork();\nif (pid == 0) {\n    printf("child\\n");               // run by the child\n    execlp("ls", "ls", NULL);         // replaces the child’s code with ls\n} else if (pid > 0) {\n    wait(NULL);                       // the parent waits for the child\n    printf("parent: child done\\n");\n}\n// Zombie: the child has ended but the parent hasn’t called wait yet',
          tr: 'Durumlar:  yeni → hazır ⇄ çalışıyor → sonlandı\n                    ↑            ↓\n                    └── bekliyor (G/Ç)\n\npid_t pid = fork();\nif (pid == 0) {\n    printf("cocuk\\n");               // çocuk tarafından çalıştırılır\n    execlp("ls", "ls", NULL);         // çocuğun kodunu ls ile değiştirir\n} else if (pid > 0) {\n    wait(NULL);                       // ebeveyn çocuğu bekler\n    printf("ebeveyn: cocuk bitti\\n");\n}\n// Zombi: çocuk bitti ama ebeveyn henüz wait çağırmadı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Combien de fois « Bonjour » s’affiche-t-il avec : fork(); fork(); fork(); printf("Bonjour\\n"); ? Combien de processus ont été créés en plus du processus de départ ? Et avec for (int i = 0; i < n; i++) fork(); ?',
          en: 'How many times is “Hello” printed by: fork(); fork(); fork(); printf("Hello\\n");? How many processes were created besides the original one? And with for (int i = 0; i < n; i++) fork();?',
          tr: 'fork(); fork(); fork(); printf("Merhaba\\n"); ile “Merhaba” kaç kez yazdırılır? İlk sürece ek olarak kaç süreç oluşturulmuştur? for (int i = 0; i < n; i++) fork(); ile?',
        },
        solution: {
          fr: 'Chaque fork double le nombre de processus : 1 → 2 → 4 → 8. Les 8 processus exécutent le printf : « Bonjour » s’affiche 8 fois, et 8 − 1 = 7 processus ont été créés. Avec la boucle : 2ⁿ processus au total, donc 2ⁿ − 1 créés.',
          en: 'Each fork doubles the number of processes: 1 → 2 → 4 → 8. All 8 processes run the printf: “Hello” is printed 8 times, and 8 − 1 = 7 processes were created. With the loop: 2ⁿ processes in total, so 2ⁿ − 1 created.',
          tr: 'Her fork süreç sayısını ikiye katlar: 1 → 2 → 4 → 8. 8 sürecin hepsi printf’i çalıştırır: “Merhaba” 8 kez yazdırılır ve 8 − 1 = 7 süreç oluşturulmuştur. Döngüyle: toplam 2ⁿ süreç, yani 2ⁿ − 1 tanesi oluşturulmuştur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que renvoie fork() dans le processus fils ?',
        en: 'What does fork() return in the child process?',
        tr: 'fork() çocuk süreçte ne döndürür?',
      },
      options: { fr: ['0', 'Le PID du père', '−1'], en: ['0', 'The parent’s PID', '−1'], tr: ['0', 'Ebeveynin PID’i', '−1'] },
      answerIndex: 0,
      explanation: {
        fr: 'fork renvoie 0 dans le fils, le PID du fils dans le père, et −1 en cas d’échec. C’est ainsi que les deux processus savent lequel ils sont.',
        en: 'fork returns 0 in the child, the child’s PID in the parent, and −1 on failure. That is how the two processes know which one they are.',
        tr: 'fork çocukta 0, ebeveynde çocuğun PID’ini, başarısızlıkta −1 döndürür. İki süreç hangisi olduklarını böyle anlar.',
      },
    },
  },
  {
    id: 'os-w03-threads',
    week: 3,
    title: { fr: 'Threads et parallélisme', en: 'Threads and parallelism', tr: 'İş parçacıkları ve paralellik' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un thread est un fil d’exécution à l’intérieur d’un processus. Les threads d’un même processus partagent le code, les données globales et les fichiers, mais chacun a sa propre pile et ses propres registres. Les créer et passer de l’un à l’autre coûte moins cher que pour des processus. Sur plusieurs cœurs, ils s’exécutent vraiment en parallèle. La loi d’Amdahl limite le gain : la partie séquentielle du programme ne s’accélère jamais.',
          en: 'A thread is a flow of execution inside a process. Threads of one process share the code, global data and files, but each has its own stack and registers. Creating and switching them costs less than for processes. On several cores, they truly run in parallel. Amdahl’s law limits the gain: the sequential part of the program never speeds up.',
          tr: 'İş parçacığı (thread), bir süreç içindeki yürütme akışıdır. Aynı sürecin iş parçacıkları kodu, global verileri ve dosyaları paylaşır, ama her birinin kendi yığını ve yazmaçları vardır. Oluşturmak ve aralarında geçiş yapmak süreçlere göre daha ucuzdur. Birden fazla çekirdekte gerçekten paralel çalışırlar. Amdahl yasası kazancı sınırlar: programın sıralı kısmı asla hızlanmaz.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#include <pthread.h>\nvoid *travail(void *arg) {\n    int id = *(int *) arg;\n    printf("thread %d\\n", id);\n    return NULL;\n}\npthread_t t[4]; int ids[4];\nfor (int i = 0; i < 4; i++) { ids[i] = i; pthread_create(&t[i], NULL, travail, &ids[i]); }\nfor (int i = 0; i < 4; i++) pthread_join(t[i], NULL);   // attendre la fin\n\nLoi d’Amdahl : accélération ≤ 1 / (S + (1 − S) / N)\nS = part séquentielle, N = nombre de cœurs',
          en: '#include <pthread.h>\nvoid *work(void *arg) {\n    int id = *(int *) arg;\n    printf("thread %d\\n", id);\n    return NULL;\n}\npthread_t t[4]; int ids[4];\nfor (int i = 0; i < 4; i++) { ids[i] = i; pthread_create(&t[i], NULL, work, &ids[i]); }\nfor (int i = 0; i < 4; i++) pthread_join(t[i], NULL);   // wait for the end\n\nAmdahl’s law: speedup ≤ 1 / (S + (1 − S) / N)\nS = sequential part, N = number of cores',
          tr: '#include <pthread.h>\nvoid *is(void *arg) {\n    int id = *(int *) arg;\n    printf("thread %d\\n", id);\n    return NULL;\n}\npthread_t t[4]; int ids[4];\nfor (int i = 0; i < 4; i++) { ids[i] = i; pthread_create(&t[i], NULL, is, &ids[i]); }\nfor (int i = 0; i < 4; i++) pthread_join(t[i], NULL);   // bitmesini bekle\n\nAmdahl yasası: hızlanma ≤ 1 / (S + (1 − S) / N)\nS = sıralı kısım, N = çekirdek sayısı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un programme passe 25 % de son temps dans une partie séquentielle, le reste est parallélisable. (1) Quelle accélération maximale obtient-on avec 4 cœurs ? (2) Et avec un nombre infini de cœurs ? (3) Pourquoi l’ordre des lignes « thread 0 … thread 3 » change-t-il d’une exécution à l’autre ?',
          en: 'A program spends 25% of its time in a sequential part; the rest can run in parallel. (1) What maximum speedup do 4 cores give? (2) And infinitely many cores? (3) Why does the order of the lines “thread 0 … thread 3” change from one run to the next?',
          tr: 'Bir program zamanının %25’ini sıralı bir kısımda geçiriyor, gerisi paralelleştirilebilir. (1) 4 çekirdekle en fazla ne kadar hızlanma elde edilir? (2) Sonsuz çekirdekle? (3) “thread 0 … thread 3” satırlarının sırası neden her çalıştırmada değişir?',
        },
        solution: {
          fr: '(1) 1 / (0,25 + 0,75 / 4) = 1 / 0,4375 ≈ 2,29 : quatre cœurs ne rendent le programme que 2,3 fois plus rapide. (2) 1 / 0,25 = 4 : jamais plus de 4 fois plus rapide, quel que soit le nombre de cœurs. (3) C’est l’ordonnanceur qui décide quand chaque thread tourne : l’ordre n’est pas garanti. Il faut une synchronisation (semaines 6 et 7) pour imposer un ordre.',
          en: '(1) 1 / (0.25 + 0.75 / 4) = 1 / 0.4375 ≈ 2.29: four cores make the program only 2.3 times faster. (2) 1 / 0.25 = 4: never more than 4 times faster, however many cores. (3) The scheduler decides when each thread runs: the order is not guaranteed. Synchronization (weeks 6 and 7) is needed to impose an order.',
          tr: '(1) 1 / (0,25 + 0,75 / 4) = 1 / 0,4375 ≈ 2,29: dört çekirdek programı yalnızca 2,3 kat hızlandırır. (2) 1 / 0,25 = 4: çekirdek sayısı ne olursa olsun asla 4 kattan fazla değil. (3) Her iş parçacığının ne zaman çalışacağına zamanlayıcı karar verir: sıra garanti değildir. Bir sıra dayatmak için eşzamanlama (6. ve 7. haftalar) gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que partagent deux threads d’un même processus ?',
        en: 'What do two threads of the same process share?',
        tr: 'Aynı sürecin iki iş parçacığı neyi paylaşır?',
      },
      options: {
        fr: ['Leur pile', 'Leurs registres', 'Les variables globales'],
        en: ['Their stack', 'Their registers', 'The global variables'],
        tr: ['Yığınlarını', 'Yazmaçlarını', 'Global değişkenleri'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'Le code, les données globales et le tas sont partagés, d’où les risques de conflit. La pile et les registres sont propres à chaque thread.',
        en: 'Code, global data and the heap are shared, hence the risk of conflicts. The stack and registers belong to each thread.',
        tr: 'Kod, global veriler ve yığın bellek (heap) paylaşılır; çakışma riski buradan gelir. Yığın (stack) ve yazmaçlar her iş parçacığına özeldir.',
      },
    },
  },
  {
    id: 'os-scheduling',
    week: 4,
    title: {
      fr: 'Ordonnancement : FCFS, SJF et SRTF',
      en: 'Scheduling: FCFS, SJF and SRTF',
      tr: 'Zamanlama: FCFS, SJF ve SRTF',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’ordonnanceur choisit quel processus prêt reçoit le processeur. Critères : temps d’attente (temps passé dans la file des prêts), temps de rotation (fin − arrivée), temps de réponse. FCFS (premier arrivé, premier servi) est simple mais un long processus fait attendre tous les autres (effet convoi). SJF prend le plus court ; sa version préemptive, SRTF, interrompt le processus en cours si un nouveau a un temps restant plus court. SJF minimise l’attente moyenne, mais il faut connaître les durées.',
          en: 'The scheduler chooses which ready process gets the CPU. Criteria: waiting time (time spent in the ready queue), turnaround time (finish − arrival), response time. FCFS (first come, first served) is simple, but one long process makes everyone wait (convoy effect). SJF takes the shortest; its preemptive version, SRTF, interrupts the running process when a new one has a shorter remaining time. SJF minimizes the average wait, but burst times must be known.',
          tr: 'Zamanlayıcı hangi hazır sürecin işlemciyi alacağını seçer. Ölçütler: bekleme süresi (hazır kuyruğunda geçen süre), tamamlanma süresi (bitiş − varış), yanıt süresi. FCFS (ilk gelen ilk hizmet alır) basittir ama uzun bir süreç herkesi bekletir (konvoy etkisi). SJF en kısayı alır; kesintili sürümü SRTF, yeni gelenin kalan süresi daha kısaysa çalışan süreci keser. SJF ortalama beklemeyi en aza indirir ama sürelerin bilinmesi gerekir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Processus   Arrivée   Durée\nP1             0         8\nP2             1         4\nP3             2         9\nP4             3         5\n\nFCFS : | P1 0–8 | P2 8–12 | P3 12–21 | P4 21–26 |\nattente = début − arrivée : P1 0, P2 7, P3 10, P4 18  → moyenne 35/4 = 8,75\n\nAttente (préemptif) = fin − arrivée − durée',
          en: 'Process   Arrival   Burst\nP1           0         8\nP2           1         4\nP3           2         9\nP4           3         5\n\nFCFS: | P1 0–8 | P2 8–12 | P3 12–21 | P4 21–26 |\nwait = start − arrival: P1 0, P2 7, P3 10, P4 18  → average 35/4 = 8.75\n\nWait (preemptive) = finish − arrival − burst',
          tr: 'Süreç   Varış   Süre\nP1        0       8\nP2        1       4\nP3        2       9\nP4        3       5\n\nFCFS: | P1 0–8 | P2 8–12 | P3 12–21 | P4 21–26 |\nbekleme = başlangıç − varış: P1 0, P2 7, P3 10, P4 18  → ortalama 35/4 = 8,75\n\nBekleme (kesintili) = bitiş − varış − süre',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec les mêmes processus, dessine le diagramme de Gantt et calcule l’attente moyenne pour (1) SJF non préemptif et (2) SRTF.',
          en: 'With the same processes, draw the Gantt chart and compute the average wait for (1) non-preemptive SJF and (2) SRTF.',
          tr: 'Aynı süreçlerle Gantt şemasını çiz ve ortalama beklemeyi hesapla: (1) kesintisiz SJF ve (2) SRTF.',
        },
        solution: {
          fr: '(1) À t = 0, seul P1 est là : il tourne jusqu’à 8. Puis le plus court parmi P2 (4), P3 (9), P4 (5) : P2 8–12, P4 12–17, P3 17–26. Attentes : P1 0, P2 7, P4 9, P3 15 → 31/4 = 7,75. (2) P1 0–1 ; P2 arrive avec 4 < 7 restants : P2 1–5 ; puis P4 5–10 (5 < 7 et 9) ; P1 10–17 ; P3 17–26. Attentes : P1 17 − 0 − 8 = 9, P2 5 − 1 − 4 = 0, P3 26 − 2 − 9 = 15, P4 10 − 3 − 5 = 2 → 26/4 = 6,5.',
          en: '(1) At t = 0 only P1 is there: it runs until 8. Then the shortest among P2 (4), P3 (9), P4 (5): P2 8–12, P4 12–17, P3 17–26. Waits: P1 0, P2 7, P4 9, P3 15 → 31/4 = 7.75. (2) P1 0–1; P2 arrives with 4 < 7 remaining: P2 1–5; then P4 5–10 (5 < 7 and 9); P1 10–17; P3 17–26. Waits: P1 17 − 0 − 8 = 9, P2 5 − 1 − 4 = 0, P3 26 − 2 − 9 = 15, P4 10 − 3 − 5 = 2 → 26/4 = 6.5.',
          tr: '(1) t = 0’da yalnızca P1 var: 8’e kadar çalışır. Sonra P2 (4), P3 (9), P4 (5) arasından en kısa: P2 8–12, P4 12–17, P3 17–26. Beklemeler: P1 0, P2 7, P4 9, P3 15 → 31/4 = 7,75. (2) P1 0–1; P2 kalan 7’den kısa 4 ile gelir: P2 1–5; sonra P4 5–10 (5 < 7 ve 9); P1 10–17; P3 17–26. Beklemeler: P1 17 − 0 − 8 = 9, P2 5 − 1 − 4 = 0, P3 26 − 2 − 9 = 15, P4 10 − 3 − 5 = 2 → 26/4 = 6,5.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel algorithme donne le plus petit temps d’attente moyen ?',
        en: 'Which algorithm gives the smallest average waiting time?',
        tr: 'Hangi algoritma en küçük ortalama bekleme süresini verir?',
      },
      options: { fr: ['FCFS', 'SJF / SRTF', 'Aucun en particulier'], en: ['FCFS', 'SJF / SRTF', 'None in particular'], tr: ['FCFS', 'SJF / SRTF', 'Özellikle hiçbiri'] },
      answerIndex: 1,
      explanation: {
        fr: 'Servir d’abord les plus courts fait attendre le moins de monde le moins longtemps : SJF est optimal pour l’attente moyenne. Son défaut : il faut prévoir les durées, et les longs processus risquent la famine.',
        en: 'Serving the shortest first makes the fewest processes wait the least: SJF is optimal for average wait. Its flaw: burst times must be predicted, and long processes risk starvation.',
        tr: 'Önce en kısaları çalıştırmak en az süreci en kısa süre bekletir: SJF ortalama bekleme için en iyisidir. Kusuru: süreler tahmin edilmeli ve uzun süreçler açlık riskiyle karşılaşır.',
      },
    },
  },
  {
    id: 'os-w05-round-robin',
    week: 5,
    title: {
      fr: 'Ordonnancement : tourniquet et priorités',
      en: 'Scheduling: round robin and priorities',
      tr: 'Zamanlama: döngüsel sıralı ve öncelik',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le tourniquet (Round Robin) donne à chaque processus un quantum de temps q, puis le remet en fin de file. Il est équitable et donne de bons temps de réponse : c’est la base des systèmes interactifs. Si q est trop grand, on retrouve FCFS ; s’il est trop petit, on perd du temps en changements de contexte. L’ordonnancement par priorité sert d’abord le processus le plus prioritaire ; pour éviter la famine des faibles priorités, on augmente leur priorité avec l’âge (vieillissement).',
          en: 'Round robin gives each process a time quantum q, then puts it back at the end of the queue. It is fair and gives good response times: it is the basis of interactive systems. If q is too large, it turns into FCFS; if too small, time is lost in context switches. Priority scheduling serves the highest-priority process first; to avoid starving low priorities, their priority grows with age (aging).',
          tr: 'Döngüsel sıralı (Round Robin) her sürece q kadar bir zaman dilimi verir, sonra onu kuyruğun sonuna koyar. Adildir ve iyi yanıt süreleri verir: etkileşimli sistemlerin temelidir. q çok büyükse FCFS’ye dönüşür; çok küçükse bağlam değişimlerinde zaman kaybedilir. Öncelikli zamanlama önce en yüksek öncelikli süreci çalıştırır; düşük önceliklilerin aç kalmaması için öncelikleri yaşla artırılır (yaşlandırma).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Processus (tous arrivés à t = 0)   Durée\nP1                                  10\nP2                                   4\nP3                                   6\n\nFCFS : | P1 0–10 | P2 10–14 | P3 14–20 |\nattentes : 0, 10, 14  → moyenne 24/3 = 8\n\nTourniquet, q = 4 : un processus non terminé repart en fin de file',
          en: 'Process (all arrive at t = 0)   Burst\nP1                               10\nP2                                4\nP3                                6\n\nFCFS: | P1 0–10 | P2 10–14 | P3 14–20 |\nwaits: 0, 10, 14  → average 24/3 = 8\n\nRound robin, q = 4: an unfinished process goes back to the end of the queue',
          tr: 'Süreç (hepsi t = 0’da gelir)   Süre\nP1                               10\nP2                                4\nP3                                6\n\nFCFS: | P1 0–10 | P2 10–14 | P3 14–20 |\nbeklemeler: 0, 10, 14  → ortalama 24/3 = 8\n\nDöngüsel sıralı, q = 4: bitmeyen süreç kuyruğun sonuna döner',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Dessine le diagramme de Gantt du tourniquet avec q = 4 pour ces trois processus. Calcule l’attente de chacun et l’attente moyenne. Le tourniquet est-il meilleur que FCFS ici ?',
          en: 'Draw the round robin Gantt chart with q = 4 for these three processes. Compute each wait and the average wait. Is round robin better than FCFS here?',
          tr: 'Bu üç süreç için q = 4 ile döngüsel sıralı Gantt şemasını çiz. Her birinin beklemesini ve ortalama beklemeyi hesapla. Burada döngüsel sıralı FCFS’den iyi midir?',
        },
        solution: {
          fr: '| P1 0–4 | P2 4–8 | P3 8–12 | P1 12–16 | P3 16–18 | P1 18–20 |. P2 finit à 8, P3 à 18, P1 à 20. Attente = fin − durée (arrivée 0) : P1 20 − 10 = 10, P2 8 − 4 = 4, P3 18 − 6 = 12 → 26/3 ≈ 8,67. L’attente moyenne est un peu moins bonne que FCFS (8), mais P2 et P3 obtiennent le processeur bien plus tôt (temps de réponse 4 et 8 au lieu de 10 et 14).',
          en: '| P1 0–4 | P2 4–8 | P3 8–12 | P1 12–16 | P3 16–18 | P1 18–20 |. P2 ends at 8, P3 at 18, P1 at 20. Wait = finish − burst (arrival 0): P1 20 − 10 = 10, P2 8 − 4 = 4, P3 18 − 6 = 12 → 26/3 ≈ 8.67. The average wait is slightly worse than FCFS (8), but P2 and P3 get the CPU much sooner (response times 4 and 8 instead of 10 and 14).',
          tr: '| P1 0–4 | P2 4–8 | P3 8–12 | P1 12–16 | P3 16–18 | P1 18–20 |. P2 8’de, P3 18’de, P1 20’de biter. Bekleme = bitiş − süre (varış 0): P1 20 − 10 = 10, P2 8 − 4 = 4, P3 18 − 6 = 12 → 26/3 ≈ 8,67. Ortalama bekleme FCFS’den (8) biraz kötüdür, ama P2 ve P3 işlemciyi çok daha erken alır (yanıt süreleri 10 ve 14 yerine 4 ve 8).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que devient le tourniquet si le quantum est plus grand que toutes les durées ?',
        en: 'What does round robin become if the quantum is larger than every burst?',
        tr: 'Zaman dilimi tüm sürelerden büyükse döngüsel sıralı neye dönüşür?',
      },
      options: { fr: ['SJF', 'FCFS', 'Ordonnancement par priorité'], en: ['SJF', 'FCFS', 'Priority scheduling'], tr: ['SJF', 'FCFS', 'Öncelikli zamanlama'] },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque processus finit pendant son premier quantum, dans l’ordre de la file : c’est exactement FCFS.',
        en: 'Each process finishes within its first quantum, in queue order: that is exactly FCFS.',
        tr: 'Her süreç ilk diliminde, kuyruk sırasıyla biter: bu tam olarak FCFS’dir.',
      },
    },
  },
  {
    id: 'os-w06-synchronization',
    week: 6,
    title: {
      fr: 'Synchronisation : section critique et verrous',
      en: 'Synchronization: critical section and locks',
      tr: 'Eşzamanlama: kritik bölge ve kilitler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une condition de course (race condition) survient quand plusieurs threads modifient une donnée partagée et que le résultat dépend de l’ordre d’exécution. compteur++ n’est pas atomique : il se fait en trois instructions machine (lire, ajouter, écrire), et un changement de contexte peut tomber au milieu. Le code qui touche la donnée partagée est une section critique. Une solution doit garantir l’exclusion mutuelle, le progrès et une attente bornée.',
          en: 'A race condition happens when several threads change shared data and the result depends on the execution order. counter++ is not atomic: it takes three machine instructions (load, add, store), and a context switch can land in the middle. Code that touches shared data is a critical section. A solution must guarantee mutual exclusion, progress and bounded waiting.',
          tr: 'Yarış durumu, birden fazla iş parçacığı paylaşılan bir veriyi değiştirdiğinde ve sonuç çalışma sırasına bağlı olduğunda ortaya çıkar. sayac++ atomik değildir: üç makine komutuyla yapılır (oku, ekle, yaz) ve ortasına bir bağlam değişimi gelebilir. Paylaşılan veriye dokunan kod kritik bölgedir. Bir çözüm karşılıklı dışlamayı, ilerlemeyi ve sınırlı beklemeyi garanti etmelidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'compteur++ en machine :      compteur-- en machine :\nr1 = compteur                r2 = compteur\nr1 = r1 + 1                  r2 = r2 − 1\ncompteur = r1                compteur = r2\n\npthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;\npthread_mutex_lock(&m);      // entrée : un seul thread à la fois\ncompteur++;                  // section critique\npthread_mutex_unlock(&m);    // sortie\n\nMatériel : test_and_set, compare_and_swap (instructions atomiques)',
          en: 'counter++ in machine code:    counter-- in machine code:\nr1 = counter                 r2 = counter\nr1 = r1 + 1                  r2 = r2 − 1\ncounter = r1                 counter = r2\n\npthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;\npthread_mutex_lock(&m);      // entry: one thread at a time\ncounter++;                   // critical section\npthread_mutex_unlock(&m);    // exit\n\nHardware: test_and_set, compare_and_swap (atomic instructions)',
          tr: 'sayac++ makine dilinde:      sayac-- makine dilinde:\nr1 = sayac                   r2 = sayac\nr1 = r1 + 1                  r2 = r2 − 1\nsayac = r1                   sayac = r2\n\npthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;\npthread_mutex_lock(&m);      // giriş: aynı anda tek iş parçacığı\nsayac++;                     // kritik bölge\npthread_mutex_unlock(&m);    // çıkış\n\nDonanım: test_and_set, compare_and_swap (atomik komutlar)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'compteur vaut 5. Le thread T1 fait compteur++ et T2 fait compteur--, sans verrou. Quelles valeurs finales sont possibles ? Donne un entrelacement qui donne 4. Quelle valeur obtient-on toujours avec le mutex ?',
          en: 'counter is 5. Thread T1 runs counter++ and T2 runs counter--, with no lock. Which final values are possible? Give an interleaving that yields 4. What value does the mutex always give?',
          tr: 'sayac 5’tir. T1 iş parçacığı sayac++, T2 sayac-- yapıyor, kilitsiz. Hangi son değerler mümkündür? 4 veren bir sıralama ver. Mutex ile her zaman hangi değer elde edilir?',
        },
        solution: {
          fr: '4, 5 ou 6. Pour 4 : T1 lit 5 (r1 = 5) ; T2 lit 5 (r2 = 5) ; T1 calcule 6 et écrit 6 ; T2 calcule 4 et écrit 4. L’écriture de T1 est perdue. 6 s’obtient en inversant les deux écritures, et 5 si un thread finit avant que l’autre ne lise. Avec le mutex, les deux sections critiques ne se chevauchent jamais : toujours 5.',
          en: '4, 5 or 6. For 4: T1 loads 5 (r1 = 5); T2 loads 5 (r2 = 5); T1 computes 6 and stores 6; T2 computes 4 and stores 4. T1’s store is lost. 6 comes from swapping the two stores, and 5 when one thread finishes before the other loads. With the mutex, the two critical sections never overlap: always 5.',
          tr: '4, 5 veya 6. 4 için: T1 5 okur (r1 = 5); T2 5 okur (r2 = 5); T1 6 hesaplar ve 6 yazar; T2 4 hesaplar ve 4 yazar. T1’in yazdığı kaybolur. İki yazma yer değiştirince 6, bir iş parçacığı diğeri okumadan bitince 5 çıkar. Mutex ile iki kritik bölge asla çakışmaz: her zaman 5.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Qu’est-ce que l’exclusion mutuelle ?',
        en: 'What is mutual exclusion?',
        tr: 'Karşılıklı dışlama nedir?',
      },
      options: {
        fr: ['Au plus un thread à la fois dans la section critique', 'Chaque thread a sa propre copie des données', 'Les threads s’exécutent dans un ordre fixe'],
        en: ['At most one thread at a time in the critical section', 'Each thread has its own copy of the data', 'Threads run in a fixed order'],
        tr: ['Kritik bölgede aynı anda en fazla bir iş parçacığı', 'Her iş parçacığının verinin kendi kopyası vardır', 'İş parçacıkları sabit bir sırayla çalışır'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Pendant qu’un thread est dans la section critique, les autres attendent à l’entrée. C’est ce que garantit un mutex.',
        en: 'While one thread is in the critical section, the others wait at the entry. That is what a mutex guarantees.',
        tr: 'Bir iş parçacığı kritik bölgedeyken diğerleri girişte bekler. Mutex’in garanti ettiği budur.',
      },
    },
  },
  {
    id: 'os-w07-semaphores',
    week: 7,
    title: {
      fr: 'Sémaphores, producteur-consommateur et révision de la vize',
      en: 'Semaphores, producer-consumer and midterm review',
      tr: 'Semaforlar, üretici-tüketici ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un sémaphore est un compteur entier manipulé seulement par deux opérations atomiques : wait (P) décrémente et bloque si la valeur est déjà à 0 ; signal (V) incrémente et réveille un processus en attente. Un sémaphore initialisé à 1 est un verrou ; initialisé à N, il laisse entrer N processus à la fois. Le problème producteur-consommateur utilise trois sémaphores : mutex = 1, vides = N, pleins = 0.',
          en: 'A semaphore is an integer counter changed only by two atomic operations: wait (P) decrements and blocks if the value is already 0; signal (V) increments and wakes a waiting process. A semaphore set to 1 is a lock; set to N, it lets N processes in at once. The producer-consumer problem uses three semaphores: mutex = 1, empty = N, full = 0.',
          tr: 'Semafor yalnızca iki atomik işlemle değişen bir tam sayı sayacıdır: wait (P) azaltır, değer zaten 0 ise bekletir; signal (V) artırır ve bekleyen bir süreci uyandırır. 1 ile başlatılan semafor bir kilittir; N ile başlatılan, aynı anda N sürecin girmesine izin verir. Üretici-tüketici problemi üç semafor kullanır: mutex = 1, bos = N, dolu = 0.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Producteur                     Consommateur\nwhile (1) {                    while (1) {\n  produire(x);                   wait(pleins);    // un élément ?\n  wait(vides);   // une place ?  wait(mutex);\n  wait(mutex);                   x = retirer();\n  deposer(x);                    signal(mutex);\n  signal(mutex);                 signal(vides);   // une place de plus\n  signal(pleins);                consommer(x);\n}                              }',
          en: 'Producer                       Consumer\nwhile (1) {                    while (1) {\n  produce(x);                    wait(full);      // an item?\n  wait(empty);   // a slot?      wait(mutex);\n  wait(mutex);                   x = take();\n  put(x);                        signal(mutex);\n  signal(mutex);                 signal(empty);   // one more slot\n  signal(full);                  consume(x);\n}                              }',
          tr: 'Üretici                       Tüketici\nwhile (1) {                    while (1) {\n  uret(x);                       wait(dolu);      // bir eleman var mı?\n  wait(bos);     // yer var mı?  wait(mutex);\n  wait(mutex);                   x = al();\n  koy(x);                        signal(mutex);\n  signal(mutex);                 signal(bos);     // bir yer daha\n  signal(dolu);                  tuket(x);\n}                              }',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Rôle du SE, mode noyau / utilisateur, appels système, interruptions\n✔ Processus : PCB, états, changement de contexte, fork / exec / wait\n✔ Threads : partagé / propre, pthread, loi d’Amdahl\n✔ Ordonnancement : FCFS, SJF, SRTF, tourniquet, priorités ; Gantt et attentes\n✔ Conditions de course, section critique, mutex\n✔ Sémaphores : wait / signal, producteur-consommateur',
          en: '✔ Role of the OS, kernel / user mode, system calls, interrupts\n✔ Processes: PCB, states, context switch, fork / exec / wait\n✔ Threads: shared / private, pthread, Amdahl’s law\n✔ Scheduling: FCFS, SJF, SRTF, round robin, priorities; Gantt and waits\n✔ Race conditions, critical section, mutex\n✔ Semaphores: wait / signal, producer-consumer',
          tr: '✔ İS’nin görevi, çekirdek / kullanıcı kipi, sistem çağrıları, kesmeler\n✔ Süreçler: PCB, durumlar, bağlam değişimi, fork / exec / wait\n✔ İş parçacıkları: paylaşılan / özel, pthread, Amdahl yasası\n✔ Zamanlama: FCFS, SJF, SRTF, döngüsel sıralı, öncelik; Gantt ve beklemeler\n✔ Yarış durumları, kritik bölge, mutex\n✔ Semaforlar: wait / signal, üretici-tüketici',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un sémaphore S vaut 2. P1, P2 puis P3 font wait(S), puis P1 fait signal(S). Qui est bloqué, et à quel moment est-il débloqué ? (2) Dans le producteur, que se passe-t-il si on inverse wait(vides) et wait(mutex) quand le tampon est plein ?',
          en: '(1) Semaphore S is 2. P1, P2 then P3 call wait(S), then P1 calls signal(S). Who is blocked, and when is it released? (2) In the producer, what happens if wait(empty) and wait(mutex) are swapped while the buffer is full?',
          tr: '(1) S semaforu 2’dir. P1, P2 sonra P3 wait(S) çağırıyor, ardından P1 signal(S) çağırıyor. Kim bekler ve ne zaman serbest kalır? (2) Üreticide, tampon doluyken wait(bos) ile wait(mutex) yer değiştirirse ne olur?',
        },
        solution: {
          fr: '(1) P1 : S passe à 1 ; P2 : S passe à 0 ; P3 : S vaut 0, il est bloqué. Le signal de P1 réveille P3, qui entre ; S reste à 0. (2) Interblocage : le producteur prend le mutex, puis attend une place libre dans wait(vides) en gardant le mutex. Le consommateur, qui libérerait une place, bloque sur wait(mutex). Chacun attend l’autre pour toujours : c’est le sujet de la semaine 8.',
          en: '(1) P1: S becomes 1; P2: S becomes 0; P3: S is 0, so it blocks. P1’s signal wakes P3, which enters; S stays 0. (2) Deadlock: the producer takes the mutex, then waits for a free slot in wait(empty) while still holding the mutex. The consumer, which would free a slot, blocks on wait(mutex). Each waits for the other forever: the topic of week 8.',
          tr: '(1) P1: S 1 olur; P2: S 0 olur; P3: S 0’dır, bekler. P1’in signal’i P3’ü uyandırır, P3 girer; S 0 kalır. (2) Kilitlenme: üretici mutex’i alır, sonra mutex’i hâlâ tutarak wait(bos) içinde boş yer bekler. Bir yer açacak olan tüketici wait(mutex)’te bekler. Her biri diğerini sonsuza dek bekler: 8. haftanın konusu.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans le problème producteur-consommateur avec un tampon de taille N, quelle est la valeur initiale du sémaphore « vides » ?',
        en: 'In the producer-consumer problem with a buffer of size N, what is the initial value of the “empty” semaphore?',
        tr: 'N boyutlu tamponlu üretici-tüketici probleminde “bos” semaforunun başlangıç değeri nedir?',
      },
      options: { fr: ['0', '1', 'N'], en: ['0', '1', 'N'], tr: ['0', '1', 'N'] },
      answerIndex: 2,
      explanation: {
        fr: 'Au départ, le tampon est vide : N places libres, donc vides = N et pleins = 0. Le mutex, lui, commence à 1.',
        en: 'At first the buffer is empty: N free slots, so empty = N and full = 0. The mutex starts at 1.',
        tr: 'Başta tampon boştur: N boş yer, yani bos = N ve dolu = 0. Mutex ise 1’den başlar.',
      },
    },
  },
  {
    id: 'os-deadlock',
    week: 8,
    title: { fr: 'L’interblocage', en: 'Deadlock', tr: 'Kilitlenme' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un interblocage (deadlock) est une situation où des processus s’attendent mutuellement pour toujours. Il ne peut se produire que si les quatre conditions de Coffman sont réunies en même temps : exclusion mutuelle, détention et attente, pas de réquisition, attente circulaire. On le représente par un graphe d’allocation des ressources : avec une seule instance par ressource, un cycle signifie un interblocage.',
          en: 'A deadlock is a situation where processes wait for each other forever. It can only happen when the four Coffman conditions hold at the same time: mutual exclusion, hold and wait, no preemption, circular wait. It is drawn as a resource allocation graph: with one instance per resource, a cycle means a deadlock.',
          tr: 'Kilitlenme (deadlock), süreçlerin birbirini sonsuza dek beklediği durumdur. Yalnızca dört Coffman koşulu aynı anda sağlanırsa oluşur: karşılıklı dışlama, tut ve bekle, geri alınamama, döngüsel bekleme. Kaynak atama grafıyla gösterilir: her kaynaktan bir tane varsa döngü kilitlenme demektir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Stratégies\nPrévention  : casser une des 4 conditions\n              ex. numéroter les ressources et les demander dans l’ordre croissant\n              → plus d’attente circulaire possible\nÉvitement   : n’accorder une ressource que si l’état reste sûr (banquier, semaine 9)\nDétection   : laisser arriver, chercher les cycles, puis tuer un processus\n              ou lui reprendre ses ressources\nIgnorer     : « algorithme de l’autruche » (Windows, Linux pour les applications)',
          en: 'Strategies\nPrevention : break one of the 4 conditions\n             e.g. number the resources and request them in increasing order\n             → circular wait becomes impossible\nAvoidance  : grant a resource only if the state stays safe (banker, week 9)\nDetection  : let it happen, look for cycles, then kill a process\n             or take its resources back\nIgnore     : the “ostrich algorithm” (Windows, Linux for applications)',
          tr: 'Stratejiler\nÖnleme     : 4 koşuldan birini boz\n             örn. kaynakları numaralandır ve artan sırayla iste\n             → döngüsel bekleme imkânsız olur\nKaçınma    : bir kaynağı yalnızca durum güvenli kalırsa ver (bankacı, 9. hafta)\nTespit     : olmasına izin ver, döngüleri ara, sonra bir süreci sonlandır\n             veya kaynaklarını geri al\nYok sayma  : “devekuşu algoritması” (uygulamalar için Windows, Linux)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Chaque ressource existe en un seul exemplaire. P1 détient R1 et demande R2 ; P2 détient R2 et demande R3 ; P3 détient R3 et demande R1. (1) Y a-t-il interblocage ? (2) Quelles conditions de Coffman sont présentes ? (3) Avec la règle « demander les ressources dans l’ordre R1 < R2 < R3 », ce scénario peut-il encore arriver ?',
          en: 'Each resource has a single instance. P1 holds R1 and requests R2; P2 holds R2 and requests R3; P3 holds R3 and requests R1. (1) Is there a deadlock? (2) Which Coffman conditions are present? (3) With the rule “request resources in the order R1 < R2 < R3”, can this scenario still happen?',
          tr: 'Her kaynaktan tek bir tane var. P1 R1’i tutuyor ve R2’yi istiyor; P2 R2’yi tutuyor ve R3’ü istiyor; P3 R3’ü tutuyor ve R1’i istiyor. (1) Kilitlenme var mı? (2) Hangi Coffman koşulları mevcut? (3) “Kaynakları R1 < R2 < R3 sırasıyla iste” kuralıyla bu senaryo yine olabilir mi?',
        },
        solution: {
          fr: '(1) Oui : le graphe contient le cycle P1 → R2 → P2 → R3 → P3 → R1 → P1, et chaque ressource n’a qu’un exemplaire. (2) Les quatre : ressources non partageables, chaque processus garde une ressource en attendant, on ne leur reprend rien, et l’attente est circulaire. (3) Non : P3 devrait demander R1 AVANT R3. Soit il obtient R1 et P1 n’a pas encore pu le prendre, soit il attend R1 sans rien détenir. Le cycle ne peut plus se former.',
          en: '(1) Yes: the graph has the cycle P1 → R2 → P2 → R3 → P3 → R1 → P1, and each resource has only one instance. (2) All four: resources can’t be shared, each process keeps one while waiting, nothing is taken back, and the wait is circular. (3) No: P3 would have to request R1 BEFORE R3. Either it gets R1 before P1 could take it, or it waits for R1 holding nothing. The cycle can no longer form.',
          tr: '(1) Evet: grafta P1 → R2 → P2 → R3 → P3 → R1 → P1 döngüsü var ve her kaynaktan yalnızca bir tane var. (2) Dördü de: kaynaklar paylaşılamaz, her süreç beklerken bir kaynak tutar, hiçbir şey geri alınmaz ve bekleme döngüseldir. (3) Hayır: P3, R1’i R3’ten ÖNCE istemek zorunda kalırdı. Ya P1 almadan R1’i alır ya da hiçbir şey tutmadan R1’i bekler. Döngü artık oluşamaz.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Laquelle de ces conditions n’est PAS une condition de Coffman ?',
        en: 'Which of these is NOT a Coffman condition?',
        tr: 'Hangisi bir Coffman koşulu DEĞİLDİR?',
      },
      options: {
        fr: ['Attente circulaire', 'Détention et attente', 'Ordonnancement par priorité'],
        en: ['Circular wait', 'Hold and wait', 'Priority scheduling'],
        tr: ['Döngüsel bekleme', 'Tut ve bekle', 'Öncelikli zamanlama'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'Les quatre conditions sont l’exclusion mutuelle, la détention et attente, l’absence de réquisition et l’attente circulaire. L’ordonnancement n’en fait pas partie.',
        en: 'The four conditions are mutual exclusion, hold and wait, no preemption and circular wait. Scheduling is not one of them.',
        tr: 'Dört koşul karşılıklı dışlama, tut ve bekle, geri alınamama ve döngüsel beklemedir. Zamanlama bunlardan biri değildir.',
      },
    },
  },
  {
    id: 'os-w09-banker',
    week: 9,
    title: { fr: 'L’algorithme du banquier', en: 'The banker’s algorithm', tr: 'Bankacı algoritması' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le banquier évite l’interblocage : chaque processus annonce son besoin maximal, et une demande n’est accordée que si l’état obtenu est sûr. Un état est sûr s’il existe un ordre dans lequel tous les processus peuvent finir : on cherche un processus dont le besoin restant (Need = Max − Allocation) tient dans les ressources disponibles (Work), on le laisse finir et rendre ses ressources, et on recommence.',
          en: 'The banker avoids deadlock: each process declares its maximum need, and a request is granted only if the resulting state is safe. A state is safe if there is an order in which every process can finish: find a process whose remaining need (Need = Max − Allocation) fits in the available resources (Work), let it finish and return its resources, and repeat.',
          tr: 'Bankacı kilitlenmeden kaçınır: her süreç en büyük ihtiyacını bildirir ve bir istek yalnızca ortaya çıkan durum güvenliyse karşılanır. Tüm süreçlerin bitebileceği bir sıra varsa durum güvenlidir: kalan ihtiyacı (Need = Max − Allocation) mevcut kaynaklara (Work) sığan bir süreç bulunur, bitmesine ve kaynaklarını geri vermesine izin verilir ve işlem tekrarlanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Ressources A, B, C (total 10, 5, 7)    Disponible = (3, 3, 2)\n\n       Allocation   Max       Need = Max − Allocation\nP0     0 1 0        7 5 3     7 4 3\nP1     2 0 0        3 2 2     1 2 2\nP2     3 0 2        9 0 2     6 0 0\nP3     2 1 1        2 2 2     0 1 1\nP4     0 0 2        4 3 3     4 3 1\n\nDemande de Pi : accordée si Demande ≤ Need, Demande ≤ Disponible,\net si l’état simulé (Disponible − Demande, …) est sûr',
          en: 'Resources A, B, C (total 10, 5, 7)    Available = (3, 3, 2)\n\n       Allocation   Max       Need = Max − Allocation\nP0     0 1 0        7 5 3     7 4 3\nP1     2 0 0        3 2 2     1 2 2\nP2     3 0 2        9 0 2     6 0 0\nP3     2 1 1        2 2 2     0 1 1\nP4     0 0 2        4 3 3     4 3 1\n\nRequest of Pi: granted if Request ≤ Need, Request ≤ Available,\nand the simulated state (Available − Request, …) is safe',
          tr: 'Kaynaklar A, B, C (toplam 10, 5, 7)    Mevcut = (3, 3, 2)\n\n       Allocation   Max       Need = Max − Allocation\nP0     0 1 0        7 5 3     7 4 3\nP1     2 0 0        3 2 2     1 2 2\nP2     3 0 2        9 0 2     6 0 0\nP3     2 1 1        2 2 2     0 1 1\nP4     0 0 2        4 3 3     4 3 1\n\nPi’nin isteği: İstek ≤ Need, İstek ≤ Mevcut ve benzetilen\ndurum (Mevcut − İstek, …) güvenliyse karşılanır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) L’état est-il sûr ? Donne une séquence sûre et l’évolution de Work. (2) P1 demande (1, 0, 2) : l’accorde-t-on ? (3) Ensuite, P0 demande (0, 2, 0) : l’accorde-t-on ?',
          en: '(1) Is the state safe? Give a safe sequence and how Work evolves. (2) P1 requests (1, 0, 2): is it granted? (3) Next, P0 requests (0, 2, 0): is it granted?',
          tr: '(1) Durum güvenli mi? Güvenli bir sıra ve Work’ün değişimini ver. (2) P1 (1, 0, 2) istiyor: karşılanır mı? (3) Ardından P0 (0, 2, 0) istiyor: karşılanır mı?',
        },
        solution: {
          fr: '(1) Work = (3,3,2). P1 : Need (1,2,2) ≤ Work, il finit → Work = (5,3,2). P3 : (0,1,1) → (7,4,3). P4 : (4,3,1) → (7,4,5). P0 : (7,4,3) → (7,5,5). P2 : (6,0,0) → (10,5,7). Séquence sûre ⟨P1, P3, P4, P0, P2⟩. (2) (1,0,2) ≤ Need (1,2,2) et ≤ Disponible (3,3,2). État simulé : Disponible (2,3,0), Need de P1 = (0,2,0). La même séquence marche encore : on accorde. (3) Disponible deviendrait (2,1,0). Aucun Need ne tient dedans : P0 (7,2,3), P1 (0,2,0), P2 (6,0,0), P3 (0,1,1), P4 (4,3,1). L’état n’est pas sûr : P0 doit attendre, même si les ressources sont libres.',
          en: '(1) Work = (3,3,2). P1: Need (1,2,2) ≤ Work, it finishes → Work = (5,3,2). P3: (0,1,1) → (7,4,3). P4: (4,3,1) → (7,4,5). P0: (7,4,3) → (7,5,5). P2: (6,0,0) → (10,5,7). Safe sequence ⟨P1, P3, P4, P0, P2⟩. (2) (1,0,2) ≤ Need (1,2,2) and ≤ Available (3,3,2). Simulated state: Available (2,3,0), P1’s Need = (0,2,0). The same sequence still works: granted. (3) Available would become (2,1,0). No Need fits: P0 (7,2,3), P1 (0,2,0), P2 (6,0,0), P3 (0,1,1), P4 (4,3,1). The state is unsafe: P0 must wait, even though the resources are free.',
          tr: '(1) Work = (3,3,2). P1: Need (1,2,2) ≤ Work, biter → Work = (5,3,2). P3: (0,1,1) → (7,4,3). P4: (4,3,1) → (7,4,5). P0: (7,4,3) → (7,5,5). P2: (6,0,0) → (10,5,7). Güvenli sıra ⟨P1, P3, P4, P0, P2⟩. (2) (1,0,2) ≤ Need (1,2,2) ve ≤ Mevcut (3,3,2). Benzetilen durum: Mevcut (2,3,0), P1’in Need’i = (0,2,0). Aynı sıra yine işler: karşılanır. (3) Mevcut (2,1,0) olurdu. Hiçbir Need sığmaz: P0 (7,2,3), P1 (0,2,0), P2 (6,0,0), P3 (0,1,1), P4 (4,3,1). Durum güvenli değildir: kaynaklar boş olsa da P0 beklemelidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un état non sûr signifie-t-il forcément un interblocage ?',
        en: 'Does an unsafe state necessarily mean a deadlock?',
        tr: 'Güvenli olmayan bir durum kesinlikle kilitlenme mi demektir?',
      },
      options: {
        fr: ['Oui, toujours', 'Non, mais un interblocage devient possible', 'Non, cela ne change rien'],
        en: ['Yes, always', 'No, but a deadlock becomes possible', 'No, it changes nothing'],
        tr: ['Evet, her zaman', 'Hayır, ama kilitlenme mümkün hale gelir', 'Hayır, hiçbir şey değiştirmez'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Dans un état non sûr, le système ne peut plus garantir que tout le monde finira : un interblocage peut arriver si les processus demandent leur maximum. Le banquier reste donc toujours dans les états sûrs.',
        en: 'In an unsafe state the system can no longer guarantee everyone will finish: a deadlock may occur if the processes ask for their maximum. So the banker always stays in safe states.',
        tr: 'Güvenli olmayan bir durumda sistem artık herkesin biteceğini garanti edemez: süreçler en büyük ihtiyaçlarını isterse kilitlenme olabilir. Bu yüzden bankacı hep güvenli durumlarda kalır.',
      },
    },
  },
  {
    id: 'os-w10-paging',
    week: 10,
    title: {
      fr: 'Gestion de la mémoire et pagination',
      en: 'Memory management and paging',
      tr: 'Bellek yönetimi ve sayfalama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Chaque processus utilise des adresses logiques ; la MMU les traduit en adresses physiques. Avec la pagination, la mémoire logique est découpée en pages et la mémoire physique en cadres de même taille. Une table des pages dit dans quel cadre est rangée chaque page. Plus de fragmentation externe, mais un peu de fragmentation interne dans la dernière page. Pour aller plus vite, le TLB garde en cache les traductions récentes.',
          en: 'Each process uses logical addresses; the MMU translates them into physical addresses. With paging, logical memory is split into pages and physical memory into frames of the same size. A page table tells which frame holds each page. No more external fragmentation, but a little internal fragmentation in the last page. To go faster, the TLB caches recent translations.',
          tr: 'Her süreç mantıksal adresler kullanır; MMU bunları fiziksel adreslere çevirir. Sayfalamada mantıksal bellek sayfalara, fiziksel bellek aynı boyutta çerçevelere bölünür. Sayfa tablosu her sayfanın hangi çerçevede olduğunu söyler. Dış parçalanma kalmaz, ama son sayfada biraz iç parçalanma olur. Daha hızlı olmak için TLB son çevirileri önbellekte tutar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'adresse logique = (numéro de page p, déplacement d)\np = adresse / taille_page        d = adresse mod taille_page\nadresse physique = cadre[p] × taille_page + d\n\nPages de 4 Ko = 4096 octets = 2¹² → d sur 12 bits\nAdresses de 32 bits → p sur 20 bits → 2²⁰ pages\nTable des pages : 2²⁰ entrées × 4 octets = 4 Mo par processus\n\nTemps d’accès effectif avec TLB (TLB 20 ns, mémoire 100 ns, succès 80 %)\nEAT = 0,8 × (20 + 100) + 0,2 × (20 + 100 + 100) = 96 + 44 = 140 ns',
          en: 'logical address = (page number p, offset d)\np = address / page_size        d = address mod page_size\nphysical address = frame[p] × page_size + d\n\n4 KB pages = 4096 bytes = 2¹² → d on 12 bits\n32-bit addresses → p on 20 bits → 2²⁰ pages\nPage table: 2²⁰ entries × 4 bytes = 4 MB per process\n\nEffective access time with a TLB (TLB 20 ns, memory 100 ns, 80% hits)\nEAT = 0.8 × (20 + 100) + 0.2 × (20 + 100 + 100) = 96 + 44 = 140 ns',
          tr: 'mantıksal adres = (sayfa numarası p, ofset d)\np = adres / sayfa_boyutu        d = adres mod sayfa_boyutu\nfiziksel adres = cerceve[p] × sayfa_boyutu + d\n\n4 KB sayfa = 4096 bayt = 2¹² → d 12 bit\n32 bit adres → p 20 bit → 2²⁰ sayfa\nSayfa tablosu: 2²⁰ kayıt × 4 bayt = süreç başına 4 MB\n\nTLB ile etkin erişim süresi (TLB 20 ns, bellek 100 ns, %80 isabet)\nEAT = 0,8 × (20 + 100) + 0,2 × (20 + 100 + 100) = 96 + 44 = 140 ns',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pages de 4 Ko. La table des pages contient : page 0 → cadre 5, page 1 → cadre 2, page 4 → cadre 7. Traduis l’adresse logique 20 000 en adresse physique. Que se passe-t-il pour l’adresse 9 000 si la page 2 n’est pas dans la table ?',
          en: '4 KB pages. The page table holds: page 0 → frame 5, page 1 → frame 2, page 4 → frame 7. Translate logical address 20,000 into a physical address. What happens for address 9,000 if page 2 is not in the table?',
          tr: '4 KB sayfalar. Sayfa tablosu: sayfa 0 → çerçeve 5, sayfa 1 → çerçeve 2, sayfa 4 → çerçeve 7. 20.000 mantıksal adresini fiziksel adrese çevir. Sayfa 2 tabloda yoksa 9.000 adresi için ne olur?',
        },
        solution: {
          fr: '20 000 / 4096 = 4 reste 3616 (4 × 4096 = 16 384) : page 4, déplacement 3616. La page 4 est dans le cadre 7 : 7 × 4096 + 3616 = 28 672 + 3616 = 32 288. Pour 9 000 : 9 000 / 4096 = 2 reste 808, page 2. Elle n’est pas en mémoire : la MMU déclenche un défaut de page, et le système la charge depuis le disque (mémoire virtuelle, semaines 11 et 12).',
          en: '20,000 / 4096 = 4 remainder 3616 (4 × 4096 = 16,384): page 4, offset 3616. Page 4 is in frame 7: 7 × 4096 + 3616 = 28,672 + 3616 = 32,288. For 9,000: 9,000 / 4096 = 2 remainder 808, page 2. It is not in memory: the MMU raises a page fault, and the OS loads it from disk (virtual memory, weeks 11 and 12).',
          tr: '20.000 / 4096 = 4 kalan 3616 (4 × 4096 = 16.384): sayfa 4, ofset 3616. Sayfa 4 çerçeve 7’dedir: 7 × 4096 + 3616 = 28.672 + 3616 = 32.288. 9.000 için: 9.000 / 4096 = 2 kalan 808, sayfa 2. Bellekte değildir: MMU bir sayfa hatası üretir ve sistem onu diskten yükler (sanal bellek, 11. ve 12. haftalar).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec des pages de 1 Ko et des adresses de 16 bits, combien de bits pour le déplacement ?',
        en: 'With 1 KB pages and 16-bit addresses, how many bits for the offset?',
        tr: '1 KB sayfalar ve 16 bit adreslerle ofset için kaç bit gerekir?',
      },
      options: { fr: ['6', '10', '16'], en: ['6', '10', '16'], tr: ['6', '10', '16'] },
      answerIndex: 1,
      explanation: {
        fr: '1 Ko = 1024 = 2¹⁰ octets : 10 bits de déplacement, et les 6 bits restants donnent le numéro de page (2⁶ = 64 pages).',
        en: '1 KB = 1024 = 2¹⁰ bytes: 10 offset bits, and the remaining 6 bits give the page number (2⁶ = 64 pages).',
        tr: '1 KB = 1024 = 2¹⁰ bayt: 10 ofset biti; kalan 6 bit sayfa numarasını verir (2⁶ = 64 sayfa).',
      },
    },
  },
  {
    id: 'os-w11-page-replacement',
    week: 11,
    title: {
      fr: 'Mémoire virtuelle et remplacement de pages',
      en: 'Virtual memory and page replacement',
      tr: 'Sanal bellek ve sayfa değiştirme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Avec la mémoire virtuelle, seules les pages utiles sont en mémoire (pagination à la demande). Un accès à une page absente provoque un défaut de page ; si aucun cadre n’est libre, il faut choisir une victime. FIFO retire la plus ancienne page chargée ; LRU retire celle qui n’a pas servi depuis le plus longtemps ; OPT (optimal) retire celle qui servira le plus tard. OPT est impossible à réaliser car il faudrait connaître l’avenir, mais il sert de référence.',
          en: 'With virtual memory, only the pages in use are in memory (demand paging). Accessing a missing page causes a page fault; if no frame is free, a victim must be chosen. FIFO removes the oldest loaded page; LRU removes the one unused for the longest time; OPT (optimal) removes the one that will be used furthest in the future. OPT can’t be built since it needs to know the future, but it serves as a benchmark.',
          tr: 'Sanal bellekte yalnızca kullanılan sayfalar bellektedir (istek üzerine sayfalama). Bellekte olmayan bir sayfaya erişim sayfa hatası doğurur; boş çerçeve yoksa bir kurban seçilmelidir. FIFO en eski yüklenen sayfayı çıkarır; LRU en uzun süredir kullanılmayanı çıkarır; OPT (en iyi) en geç kullanılacak olanı çıkarır. Geleceği bilmek gerektiğinden OPT gerçeklenemez ama karşılaştırma ölçüsü olarak kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Chaîne de références (3 cadres) :\n7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1\n\nDébut commun aux trois algorithmes :\n7 → [7]   0 → [7 0]   1 → [7 0 1]   (3 défauts obligatoires)\n2 → défaut, victime = 7 (FIFO, LRU et OPT choisissent tous 7 ici)\n\nAnomalie de Belady : avec FIFO, plus de cadres peut donner PLUS de défauts\n1 2 3 4 1 2 5 1 2 3 4 5 → 3 cadres : 9 défauts, 4 cadres : 10 défauts',
          en: 'Reference string (3 frames):\n7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1\n\nStart shared by all three algorithms:\n7 → [7]   0 → [7 0]   1 → [7 0 1]   (3 compulsory faults)\n2 → fault, victim = 7 (FIFO, LRU and OPT all pick 7 here)\n\nBelady’s anomaly: with FIFO, more frames can give MORE faults\n1 2 3 4 1 2 5 1 2 3 4 5 → 3 frames: 9 faults, 4 frames: 10 faults',
          tr: 'Başvuru dizisi (3 çerçeve):\n7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1\n\nÜç algoritmanın ortak başlangıcı:\n7 → [7]   0 → [7 0]   1 → [7 0 1]   (3 zorunlu hata)\n2 → hata, kurban = 7 (FIFO, LRU ve OPT burada hep 7’yi seçer)\n\nBelady anomalisi: FIFO’da daha çok çerçeve DAHA ÇOK hata verebilir\n1 2 3 4 1 2 5 1 2 3 4 5 → 3 çerçeve: 9 hata, 4 çerçeve: 10 hata',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec la chaîne ci-dessus et 3 cadres, compte les défauts de page pour FIFO, LRU et OPT. Classe les trois algorithmes.',
          en: 'With the string above and 3 frames, count the page faults for FIFO, LRU and OPT. Rank the three algorithms.',
          tr: 'Yukarıdaki dizi ve 3 çerçeveyle FIFO, LRU ve OPT için sayfa hatalarını say. Üç algoritmayı sırala.',
        },
        solution: {
          fr: 'FIFO : 15 défauts. LRU : 12 défauts. OPT : 9 défauts. Exemple de différence : à la référence 3 (6e), les cadres sont [2 0 1]. FIFO retire 0, la plus ancienne page chargée, alors que 0 revient juste après ; LRU retire 1, inutilisé depuis le plus longtemps ; OPT retire aussi 1, utilisé le plus tard. Classement : OPT (9) < LRU (12) < FIFO (15). LRU est une bonne approximation d’OPT, car le passé récent prédit souvent l’avenir proche.',
          en: 'FIFO: 15 faults. LRU: 12 faults. OPT: 9 faults. Example of a difference: at reference 3 (the 6th), the frames are [2 0 1]. FIFO removes 0, the oldest loaded page, although 0 comes back right after; LRU removes 1, unused for the longest time; OPT also removes 1, used latest. Ranking: OPT (9) < LRU (12) < FIFO (15). LRU approximates OPT well, since the recent past often predicts the near future.',
          tr: 'FIFO: 15 hata. LRU: 12 hata. OPT: 9 hata. Fark örneği: 3 başvurusunda (6.) çerçeveler [2 0 1]. FIFO en eski yüklenen 0’ı çıkarır, oysa 0 hemen ardından geri gelir; LRU en uzun süredir kullanılmayan 1’i çıkarır; OPT de en geç kullanılacak 1’i çıkarır. Sıralama: OPT (9) < LRU (12) < FIFO (15). Yakın geçmiş çoğu zaman yakın geleceği öngördüğü için LRU, OPT’ye iyi bir yaklaşımdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel algorithme de remplacement peut souffrir de l’anomalie de Belady ?',
        en: 'Which replacement algorithm can suffer from Belady’s anomaly?',
        tr: 'Hangi değiştirme algoritması Belady anomalisinden etkilenebilir?',
      },
      options: { fr: ['FIFO', 'LRU', 'OPT'], en: ['FIFO', 'LRU', 'OPT'], tr: ['FIFO', 'LRU', 'OPT'] },
      answerIndex: 0,
      explanation: {
        fr: 'LRU et OPT sont des algorithmes « à pile » : les pages gardées avec n cadres le sont aussi avec n + 1. FIFO n’a pas cette propriété, donc ajouter un cadre peut augmenter les défauts.',
        en: 'LRU and OPT are “stack” algorithms: the pages kept with n frames are also kept with n + 1. FIFO lacks this property, so adding a frame can increase faults.',
        tr: 'LRU ve OPT “yığın” algoritmalarıdır: n çerçeveyle tutulan sayfalar n + 1 çerçeveyle de tutulur. FIFO’da bu özellik yoktur, bu yüzden çerçeve eklemek hataları artırabilir.',
      },
    },
  },
  {
    id: 'os-w12-virtual-memory',
    week: 12,
    title: {
      fr: 'Coût des défauts de page et écroulement',
      en: 'Cost of page faults and thrashing',
      tr: 'Sayfa hatalarının maliyeti ve çırpınma',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un défaut de page coûte des millisecondes (lecture sur disque), contre des nanosecondes pour un accès mémoire : même un taux de défauts minuscule ralentit énormément le système. Si les processus n’ont pas assez de cadres pour leur ensemble de travail (les pages qu’ils utilisent en ce moment), ils passent leur temps à se voler des pages : c’est l’écroulement (thrashing). Le processeur est alors presque inactif, et il ne faut surtout pas lancer plus de processus.',
          en: 'A page fault costs milliseconds (a disk read), against nanoseconds for a memory access: even a tiny fault rate slows the system enormously. If processes don’t have enough frames for their working set (the pages they are using right now), they spend their time stealing pages from each other: that is thrashing. The CPU is then nearly idle, and starting more processes is the worst thing to do.',
          tr: 'Bir sayfa hatası milisaniyeler tutar (disk okuması), bellek erişimi ise nanosaniyeler: çok küçük bir hata oranı bile sistemi büyük ölçüde yavaşlatır. Süreçlerin çalışma kümelerine (şu anda kullandıkları sayfalar) yetecek çerçeve yoksa, zamanlarını birbirlerinden sayfa çalmakla geçirirler: buna çırpınma (thrashing) denir. İşlemci o zaman neredeyse boştur ve daha fazla süreç başlatmak yapılabilecek en kötü şeydir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'EAT = (1 − p) × accès_mémoire + p × temps_défaut\np = probabilité de défaut de page\n\nLutter contre l’écroulement :\n• modèle de l’ensemble de travail : donner à chaque processus\n  assez de cadres pour les pages utilisées pendant une fenêtre Δ\n• fréquence des défauts (PFF) : trop de défauts → plus de cadres,\n  trop peu → on lui en reprend\n• suspendre des processus si la somme des ensembles de travail\n  dépasse la mémoire',
          en: 'EAT = (1 − p) × memory_access + p × fault_time\np = probability of a page fault\n\nFighting thrashing:\n• working set model: give each process enough frames\n  for the pages used during a window Δ\n• page fault frequency (PFF): too many faults → more frames,\n  too few → take some back\n• suspend processes if the sum of working sets\n  exceeds memory',
          tr: 'EAT = (1 − p) × bellek_erişimi + p × hata_süresi\np = sayfa hatası olasılığı\n\nÇırpınmayla mücadele:\n• çalışma kümesi modeli: her sürece bir Δ penceresinde\n  kullanılan sayfalara yetecek çerçeve ver\n• sayfa hatası sıklığı (PFF): çok hata → daha çok çerçeve,\n  çok az → bir kısmını geri al\n• çalışma kümelerinin toplamı belleği aşarsa\n  süreçleri askıya al',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un accès mémoire prend 200 ns et un défaut de page 8 ms. (1) Que vaut le temps d’accès effectif si p = 0,001 (un défaut pour 1000 accès) ? Combien de fois plus lent est-ce ? (2) Quel taux de défauts faut-il pour ne pas dépasser 10 % de ralentissement ?',
          en: 'A memory access takes 200 ns and a page fault 8 ms. (1) What is the effective access time if p = 0.001 (one fault per 1000 accesses)? How many times slower is that? (2) What fault rate keeps the slowdown under 10%?',
          tr: 'Bir bellek erişimi 200 ns, bir sayfa hatası 8 ms sürüyor. (1) p = 0,001 (1000 erişimde bir hata) ise etkin erişim süresi nedir? Kaç kat yavaştır? (2) Yavaşlamanın %10’u geçmemesi için hata oranı ne olmalıdır?',
        },
        solution: {
          fr: '(1) 8 ms = 8 000 000 ns. EAT = 0,999 × 200 + 0,001 × 8 000 000 = 199,8 + 8000 = 8199,8 ns ≈ 8,2 µs : environ 41 fois plus lent. (2) On veut EAT ≤ 220 ns : 200 + p × (8 000 000 − 200) ≤ 220, donc p ≤ 20 / 7 999 800 ≈ 2,5 × 10⁻⁶. Il faut moins d’un défaut pour environ 400 000 accès.',
          en: '(1) 8 ms = 8,000,000 ns. EAT = 0.999 × 200 + 0.001 × 8,000,000 = 199.8 + 8000 = 8199.8 ns ≈ 8.2 µs: about 41 times slower. (2) We want EAT ≤ 220 ns: 200 + p × (8,000,000 − 200) ≤ 220, so p ≤ 20 / 7,999,800 ≈ 2.5 × 10⁻⁶. That is fewer than one fault per about 400,000 accesses.',
          tr: '(1) 8 ms = 8.000.000 ns. EAT = 0,999 × 200 + 0,001 × 8.000.000 = 199,8 + 8000 = 8199,8 ns ≈ 8,2 µs: yaklaşık 41 kat yavaş. (2) EAT ≤ 220 ns isteniyor: 200 + p × (8.000.000 − 200) ≤ 220, yani p ≤ 20 / 7.999.800 ≈ 2,5 × 10⁻⁶. Yaklaşık 400.000 erişimde birden az hata olmalıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Le système s’écroule (thrashing) et l’utilisation du processeur chute. Que faut-il faire ?',
        en: 'The system is thrashing and CPU usage drops. What should be done?',
        tr: 'Sistem çırpınıyor ve işlemci kullanımı düşüyor. Ne yapılmalıdır?',
      },
      options: {
        fr: ['Lancer plus de processus pour occuper le processeur', 'Réduire le nombre de processus en mémoire', 'Augmenter le quantum du tourniquet'],
        en: ['Start more processes to keep the CPU busy', 'Reduce the number of processes in memory', 'Increase the round robin quantum'],
        tr: ['İşlemciyi meşgul etmek için daha çok süreç başlatmak', 'Bellekteki süreç sayısını azaltmak', 'Döngüsel sıralının dilimini artırmak'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le processeur attend le disque, il n’est pas sous-utilisé. Ajouter des processus prend encore des cadres et aggrave le problème : il faut en suspendre pour rendre de la mémoire aux autres.',
        en: 'The CPU is waiting for the disk, not underused. Adding processes takes even more frames and makes it worse: some must be suspended to give memory back to the others.',
        tr: 'İşlemci az kullanılmıyor, diski bekliyor. Süreç eklemek daha da çok çerçeve alır ve durumu kötüleştirir: diğerlerine bellek açmak için bazıları askıya alınmalıdır.',
      },
    },
  },
  {
    id: 'os-w13-file-systems',
    week: 13,
    title: {
      fr: 'Systèmes de fichiers et allocation',
      en: 'File systems and allocation',
      tr: 'Dosya sistemleri ve yer ayırma',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le système de fichiers organise les blocs du disque en fichiers et en répertoires. Trois méthodes d’allocation : contiguë (rapide, mais fragmentation externe et fichiers difficiles à agrandir), chaînée (chaque bloc pointe vers le suivant : pas d’accès direct, c’est le principe de la FAT) et indexée (un bloc d’index liste les blocs du fichier). Sous Unix, chaque fichier est décrit par un inode : propriétaire, droits, taille, dates, et pointeurs vers les blocs de données.',
          en: 'The file system organizes disk blocks into files and directories. Three allocation methods: contiguous (fast, but external fragmentation and hard-to-grow files), linked (each block points to the next: no direct access, the idea behind FAT) and indexed (an index block lists the file’s blocks). On Unix, each file is described by an inode: owner, permissions, size, dates, and pointers to the data blocks.',
          tr: 'Dosya sistemi disk bloklarını dosyalar ve dizinler halinde düzenler. Üç yer ayırma yöntemi: bitişik (hızlı, ama dış parçalanma ve büyütülmesi zor dosyalar), bağlı (her blok sonrakini gösterir: doğrudan erişim yok, FAT’in ilkesi) ve dizinli (bir dizin bloğu dosyanın bloklarını listeler). Unix’te her dosya bir inode ile tanımlanır: sahip, izinler, boyut, tarihler ve veri bloklarına işaretçiler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Inode Unix (exemple classique)\n12 pointeurs directs        → 12 blocs\n1 pointeur indirect simple  → un bloc rempli de pointeurs\n1 pointeur indirect double  → un bloc de pointeurs vers des blocs de pointeurs\n(1 pointeur indirect triple pour les très gros fichiers)\n\nDroits : rwx pour propriétaire / groupe / autres\nchmod 754 fichier  →  rwx r-x r--\nLien physique : un autre nom pour le même inode\nLien symbolique : un petit fichier qui contient un chemin',
          en: 'Unix inode (classic example)\n12 direct pointers          → 12 blocks\n1 single indirect pointer   → a block full of pointers\n1 double indirect pointer   → a block of pointers to blocks of pointers\n(1 triple indirect pointer for very large files)\n\nPermissions: rwx for owner / group / others\nchmod 754 file  →  rwx r-x r--\nHard link: another name for the same inode\nSymbolic link: a small file holding a path',
          tr: 'Unix inode (klasik örnek)\n12 doğrudan işaretçi        → 12 blok\n1 tek dolaylı işaretçi      → işaretçilerle dolu bir blok\n1 çift dolaylı işaretçi     → işaretçi bloklarını gösteren bir işaretçi bloğu\n(çok büyük dosyalar için 1 üçlü dolaylı işaretçi)\n\nİzinler: sahip / grup / diğerleri için rwx\nchmod 754 dosya  →  rwx r-x r--\nSabit bağlantı: aynı inode için başka bir ad\nSembolik bağlantı: bir yol içeren küçük bir dosya',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Blocs de 4 Ko et pointeurs de 4 octets ; l’inode a 12 pointeurs directs, 1 indirect simple et 1 indirect double. (1) Combien de pointeurs tient un bloc ? (2) Quelle est la taille maximale d’un fichier ? (3) Que signifie chmod 640 ?',
          en: '4 KB blocks and 4-byte pointers; the inode has 12 direct pointers, 1 single indirect and 1 double indirect. (1) How many pointers fit in a block? (2) What is the maximum file size? (3) What does chmod 640 mean?',
          tr: '4 KB bloklar ve 4 baytlık işaretçiler; inode’da 12 doğrudan, 1 tek dolaylı ve 1 çift dolaylı işaretçi var. (1) Bir bloğa kaç işaretçi sığar? (2) En büyük dosya boyutu nedir? (3) chmod 640 ne anlama gelir?',
        },
        solution: {
          fr: '(1) 4096 / 4 = 1024 pointeurs. (2) Blocs adressables : 12 + 1024 + 1024² = 12 + 1024 + 1 048 576 = 1 049 612. Taille : 1 049 612 × 4 Ko = 4 299 210 752 octets ≈ 4 Go (l’indirect double fournit presque tout). (3) 6 = rw- pour le propriétaire, 4 = r-- pour le groupe, 0 = --- pour les autres : le propriétaire lit et écrit, le groupe lit seulement, les autres n’ont aucun accès.',
          en: '(1) 4096 / 4 = 1024 pointers. (2) Addressable blocks: 12 + 1024 + 1024² = 12 + 1024 + 1,048,576 = 1,049,612. Size: 1,049,612 × 4 KB = 4,299,210,752 bytes ≈ 4 GB (the double indirect provides nearly all of it). (3) 6 = rw- for the owner, 4 = r-- for the group, 0 = --- for others: the owner reads and writes, the group only reads, others have no access.',
          tr: '(1) 4096 / 4 = 1024 işaretçi. (2) Adreslenebilir bloklar: 12 + 1024 + 1024² = 12 + 1024 + 1.048.576 = 1.049.612. Boyut: 1.049.612 × 4 KB = 4.299.210.752 bayt ≈ 4 GB (neredeyse hepsini çift dolaylı sağlar). (3) 6 = sahip için rw-, 4 = grup için r--, 0 = diğerleri için ---: sahip okur ve yazar, grup yalnızca okur, diğerlerinin erişimi yoktur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle méthode d’allocation ne permet pas d’accès direct rapide au milieu d’un fichier ?',
        en: 'Which allocation method doesn’t allow fast direct access to the middle of a file?',
        tr: 'Hangi yer ayırma yöntemi bir dosyanın ortasına hızlı doğrudan erişime izin vermez?',
      },
      options: { fr: ['Contiguë', 'Chaînée', 'Indexée'], en: ['Contiguous', 'Linked', 'Indexed'], tr: ['Bitişik', 'Bağlı', 'Dizinli'] },
      answerIndex: 1,
      explanation: {
        fr: 'Pour atteindre le bloc n, il faut suivre n pointeurs depuis le début du fichier. La FAT garde ces pointeurs dans une table en mémoire pour aller plus vite.',
        en: 'Reaching block n means following n pointers from the start of the file. FAT keeps those pointers in an in-memory table to go faster.',
        tr: 'n. bloğa ulaşmak için dosyanın başından n işaretçi izlenmelidir. FAT daha hızlı olmak için bu işaretçileri bellekteki bir tabloda tutar.',
      },
    },
  },
  {
    id: 'os-w14-disk-scheduling',
    week: 14,
    title: {
      fr: 'Ordonnancement du disque et révision du final',
      en: 'Disk scheduling and final review',
      tr: 'Disk zamanlaması ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Sur un disque dur, déplacer la tête d’un cylindre à l’autre (le temps de recherche) coûte cher : on réordonne les requêtes pour réduire le déplacement total. FCFS les sert dans l’ordre d’arrivée. SSTF prend la plus proche, mais peut affamer les requêtes lointaines. SCAN (ascenseur) va jusqu’au bout du disque dans un sens, puis repart dans l’autre ; LOOK fait demi-tour à la dernière requête ; C-SCAN ne sert que dans un sens, pour un temps d’attente plus régulier. Sur un SSD, sans tête mobile, on utilise simplement FCFS.',
          en: 'On a hard disk, moving the head between cylinders (seek time) is expensive: requests are reordered to reduce total movement. FCFS serves them in arrival order. SSTF picks the closest, but can starve distant requests. SCAN (elevator) goes to the end of the disk in one direction, then back the other way; LOOK turns around at the last request; C-SCAN serves in one direction only, for more uniform waits. On an SSD, with no moving head, plain FCFS is used.',
          tr: 'Sabit diskte kafayı silindirler arasında taşımak (arama süresi) pahalıdır: toplam hareketi azaltmak için istekler yeniden sıralanır. FCFS onları geliş sırasıyla karşılar. SSTF en yakını seçer ama uzak istekleri aç bırakabilir. SCAN (asansör) bir yönde diskin sonuna kadar gider, sonra ters yöne döner; LOOK son istekte döner; C-SCAN yalnızca bir yönde hizmet eder, beklemeler daha düzenli olur. Hareketli kafası olmayan SSD’de basitçe FCFS kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Cylindres 0 à 199, tête en 53\nFile : 98, 183, 37, 122, 14, 124, 65, 67\n\nFCFS : 53→98→183→37→122→14→124→65→67\n       45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylindres',
          en: 'Cylinders 0 to 199, head at 53\nQueue: 98, 183, 37, 122, 14, 124, 65, 67\n\nFCFS: 53→98→183→37→122→14→124→65→67\n      45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylinders',
          tr: 'Silindirler 0–199, kafa 53’te\nKuyruk: 98, 183, 37, 122, 14, 124, 65, 67\n\nFCFS: 53→98→183→37→122→14→124→65→67\n      45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 silindir',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Interblocage : 4 conditions de Coffman, graphe d’allocation, prévention\n✔ Banquier : Need = Max − Allocation, état sûr, accepter ou refuser une demande\n✔ Pagination : (page, déplacement), traduction d’adresse, taille de table, TLB, EAT\n✔ Remplacement : FIFO, LRU, OPT, anomalie de Belady\n✔ Défauts de page : EAT, ensemble de travail, écroulement\n✔ Fichiers : contiguë / chaînée / indexée, inode, taille max, droits rwx\n✔ Disque : FCFS, SSTF, SCAN, LOOK, C-SCAN',
          en: '✔ Deadlock: 4 Coffman conditions, allocation graph, prevention\n✔ Banker: Need = Max − Allocation, safe state, grant or refuse a request\n✔ Paging: (page, offset), address translation, table size, TLB, EAT\n✔ Replacement: FIFO, LRU, OPT, Belady’s anomaly\n✔ Page faults: EAT, working set, thrashing\n✔ Files: contiguous / linked / indexed, inode, max size, rwx permissions\n✔ Disk: FCFS, SSTF, SCAN, LOOK, C-SCAN',
          tr: '✔ Kilitlenme: 4 Coffman koşulu, atama grafı, önleme\n✔ Bankacı: Need = Max − Allocation, güvenli durum, isteği karşılamak veya reddetmek\n✔ Sayfalama: (sayfa, ofset), adres çevirme, tablo boyutu, TLB, EAT\n✔ Değiştirme: FIFO, LRU, OPT, Belady anomalisi\n✔ Sayfa hataları: EAT, çalışma kümesi, çırpınma\n✔ Dosyalar: bitişik / bağlı / dizinli, inode, en büyük boyut, rwx izinleri\n✔ Disk: FCFS, SSTF, SCAN, LOOK, C-SCAN',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Même file, tête en 53. Calcule le déplacement total pour (1) SSTF, (2) SCAN en allant d’abord vers 0, (3) LOOK en allant d’abord vers les petits numéros.',
          en: 'Same queue, head at 53. Compute the total movement for (1) SSTF, (2) SCAN going toward 0 first, (3) LOOK going toward lower numbers first.',
          tr: 'Aynı kuyruk, kafa 53’te. Toplam hareketi hesapla: (1) SSTF, (2) önce 0’a doğru giden SCAN, (3) önce küçük numaralara giden LOOK.',
        },
        solution: {
          fr: '(1) SSTF : 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183 : 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236. (2) SCAN : 53 → 37 → 14 → 0 (53 cylindres), puis 0 → 65 → … → 183 (183) : 236. (3) LOOK : 53 → 14 (39), puis 14 → 183 (169) : 208, car on ne va pas jusqu’à 0. FCFS en faisait 640.',
          en: '(1) SSTF: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183: 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236. (2) SCAN: 53 → 37 → 14 → 0 (53 cylinders), then 0 → 65 → … → 183 (183): 236. (3) LOOK: 53 → 14 (39), then 14 → 183 (169): 208, since it doesn’t go all the way to 0. FCFS took 640.',
          tr: '(1) SSTF: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183: 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236. (2) SCAN: 53 → 37 → 14 → 0 (53 silindir), sonra 0 → 65 → … → 183 (183): 236. (3) LOOK: 53 → 14 (39), sonra 14 → 183 (169): 208, çünkü 0’a kadar gitmez. FCFS 640 yapıyordu.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel algorithme de disque peut affamer des requêtes éloignées de la tête ?',
        en: 'Which disk algorithm can starve requests far from the head?',
        tr: 'Hangi disk algoritması kafadan uzak istekleri aç bırakabilir?',
      },
      options: { fr: ['FCFS', 'SSTF', 'C-SCAN'], en: ['FCFS', 'SSTF', 'C-SCAN'], tr: ['FCFS', 'SSTF', 'C-SCAN'] },
      answerIndex: 1,
      explanation: {
        fr: 'Si de nouvelles requêtes arrivent sans cesse près de la tête, SSTF les sert toujours en premier, et une requête lointaine peut attendre indéfiniment. SCAN et C-SCAN finissent toujours par passer partout.',
        en: 'If new requests keep arriving near the head, SSTF always serves them first, and a distant request may wait forever. SCAN and C-SCAN always end up passing everywhere.',
        tr: 'Kafanın yakınına sürekli yeni istekler gelirse SSTF hep onları önce karşılar ve uzaktaki bir istek sonsuza dek bekleyebilir. SCAN ve C-SCAN eninde sonunda her yerden geçer.',
      },
    },
  },
];
