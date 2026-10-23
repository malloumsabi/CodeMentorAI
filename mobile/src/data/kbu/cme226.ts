/**
 * CME226 Database Management Systems, 14 weeks. Every SQL example uses the same small database
 * (Student, Course, Enrollment), and every query result was checked with SQLite. Weeks 1–7 prepare
 * the midterm, weeks 8–14 the final. Weeks 5, 6 and 8 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const cme226Lessons: LessonSource[] = [
  {
    id: 'db-w01-intro',
    week: 1,
    title: {
      fr: 'Introduction aux systèmes de gestion de bases de données',
      en: 'Introduction to database management systems',
      tr: 'Veritabanı yönetim sistemlerine giriş',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une base de données est un ensemble organisé de données ; le SGBD (MySQL, PostgreSQL, Oracle, SQL Server) est le logiciel qui la gère. Par rapport à de simples fichiers, il évite la redondance et les incohérences, contrôle l’accès, permet à plusieurs utilisateurs de travailler en même temps et récupère les données après une panne.',
          en: 'A database is an organized collection of data; the DBMS (MySQL, PostgreSQL, Oracle, SQL Server) is the software that manages it. Compared with plain files, it avoids redundancy and inconsistencies, controls access, lets many users work at the same time and recovers data after a crash.',
          tr: 'Veritabanı düzenli bir veri topluluğudur; VTYS (MySQL, PostgreSQL, Oracle, SQL Server) onu yöneten yazılımdır. Basit dosyalara göre tekrarı ve tutarsızlığı önler, erişimi denetler, birçok kullanıcının aynı anda çalışmasını sağlar ve bir çökmeden sonra verileri kurtarır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Architecture à 3 niveaux (ANSI/SPARC)\nexterne    : les vues de chaque utilisateur\nconceptuel : toutes les tables, leurs liens et contraintes\ninterne    : stockage physique (fichiers, index)\n\nIndépendance logique  : changer le schéma conceptuel sans casser les vues\nIndépendance physique : changer le stockage sans changer les tables\n\nLangages : DDL (définir : CREATE, ALTER, DROP)\n           DML (manipuler : SELECT, INSERT, UPDATE, DELETE)\n           DCL (droits : GRANT, REVOKE)',
          en: '3-level architecture (ANSI/SPARC)\nexternal   : each user’s views\nconceptual : all the tables, their links and constraints\ninternal   : physical storage (files, indexes)\n\nLogical independence  : change the conceptual schema without breaking views\nPhysical independence : change storage without changing the tables\n\nLanguages: DDL (define: CREATE, ALTER, DROP)\n           DML (manipulate: SELECT, INSERT, UPDATE, DELETE)\n           DCL (rights: GRANT, REVOKE)',
          tr: '3 seviyeli mimari (ANSI/SPARC)\ndış      : her kullanıcının görünümleri\nkavramsal: tüm tablolar, bağlantıları ve kısıtları\niç       : fiziksel saklama (dosyalar, indeksler)\n\nMantıksal bağımsızlık : görünümleri bozmadan kavramsal şemayı değiştirmek\nFiziksel bağımsızlık  : tabloları değiştirmeden saklamayı değiştirmek\n\nDiller: DDL (tanımlama: CREATE, ALTER, DROP)\n        DML (işleme: SELECT, INSERT, UPDATE, DELETE)\n        DCL (yetkiler: GRANT, REVOKE)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une école garde tout dans un seul tableur : chaque ligne = étudiant, nom, ville, code du cours, titre du cours, note. Ali suit 2 cours, donc il a 2 lignes. Donne trois problèmes que pose ce fichier.',
          en: 'A school keeps everything in one spreadsheet: each row = student, name, city, course code, course title, grade. Ali takes 2 courses, so he has 2 rows. Give three problems with this file.',
          tr: 'Bir okul her şeyi tek bir tabloda tutuyor: her satır = öğrenci, ad, şehir, ders kodu, ders adı, not. Ali 2 ders alıyor, yani 2 satırı var. Bu dosyanın üç sorununu ver.',
        },
        solution: {
          fr: '(1) Redondance : le nom et la ville d’Ali, le titre de chaque cours sont répétés sur plusieurs lignes. (2) Anomalie de mise à jour : si Ali déménage et qu’on ne corrige qu’une ligne, les données deviennent incohérentes. (3) Anomalies d’insertion et de suppression : impossible d’ajouter un cours qui n’a pas encore d’étudiant, et supprimer le dernier étudiant d’un cours fait disparaître le cours. Solution : séparer en tables Student, Course et Enrollment (semaines 2 à 4).',
          en: '(1) Redundancy: Ali’s name and city, each course title are repeated on several rows. (2) Update anomaly: if Ali moves and only one row is fixed, the data becomes inconsistent. (3) Insert and delete anomalies: a course with no student yet cannot be added, and deleting a course’s last student makes the course vanish. Solution: split into Student, Course and Enrollment tables (weeks 2 to 4).',
          tr: '(1) Tekrar: Ali’nin adı ve şehri, her dersin adı birçok satırda tekrarlanır. (2) Güncelleme anomalisi: Ali taşınır ve yalnızca bir satır düzeltilirse veriler tutarsız olur. (3) Ekleme ve silme anomalileri: henüz öğrencisi olmayan bir ders eklenemez; bir dersin son öğrencisi silinince ders de kaybolur. Çözüm: Student, Course ve Enrollment tablolarına ayırmak (2-4. haftalar).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'CREATE TABLE fait partie de quel langage ?',
        en: 'Which language does CREATE TABLE belong to?',
        tr: 'CREATE TABLE hangi dile aittir?',
      },
      options: { fr: ['DDL', 'DML', 'DCL'], en: ['DDL', 'DML', 'DCL'], tr: ['DDL', 'DML', 'DCL'] },
      answerIndex: 0,
      explanation: {
        fr: 'CREATE, ALTER et DROP définissent la structure : c’est le DDL (Data Definition Language). SELECT ou INSERT sont du DML.',
        en: 'CREATE, ALTER and DROP define the structure: that is DDL (Data Definition Language). SELECT or INSERT are DML.',
        tr: 'CREATE, ALTER ve DROP yapıyı tanımlar: bu DDL’dir (Data Definition Language). SELECT veya INSERT ise DML’dir.',
      },
    },
  },
  {
    id: 'db-w02-er-model',
    week: 2,
    title: { fr: 'Le modèle entité-association', en: 'The entity-relationship model', tr: 'Varlık-ilişki modeli' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le modèle entité-association (E-R) décrit le monde réel avant de créer les tables. Une entité est un objet (Étudiant, Cours) avec des attributs (nom, ville) ; l’attribut souligné est la clé. Une association relie des entités (Étudiant suit Cours) et a une cardinalité : 1:1, 1:N ou M:N. Une association peut avoir ses propres attributs (la note).',
          en: 'The entity-relationship (E-R) model describes the real world before creating tables. An entity is an object (Student, Course) with attributes (name, city); the underlined attribute is the key. A relationship links entities (Student takes Course) and has a cardinality: 1:1, 1:N or M:N. A relationship can have its own attributes (the grade).',
          tr: 'Varlık-ilişki (E-R) modeli tablolar oluşturulmadan önce gerçek dünyayı tanımlar. Varlık, öznitelikleri (ad, şehir) olan bir nesnedir (Öğrenci, Ders); altı çizili öznitelik anahtardır. İlişki varlıkları bağlar (Öğrenci Ders alır) ve bir eşleme sayısı vardır: 1:1, 1:N veya M:N. İlişkinin kendi öznitelikleri olabilir (not).',
        },
      },
      {
        type: 'code',
        code: {
          fr: '[Student] ──< takes >── [Course]\n  id (clé)       grade        code (clé)\n  name                        title\n  city                        credits\n  year\n\nCardinalité M:N : un étudiant suit plusieurs cours,\n                  un cours a plusieurs étudiants\nExemples 1:N : un département a plusieurs enseignants\n         1:1 : un pays a une capitale\nRectangle = entité, losange = association, ovale = attribut',
          en: '[Student] ──< takes >── [Course]\n  id (key)       grade        code (key)\n  name                        title\n  city                        credits\n  year\n\nM:N cardinality: a student takes several courses,\n                 a course has several students\n1:N examples: a department has several teachers\n         1:1: a country has one capital\nRectangle = entity, diamond = relationship, oval = attribute',
          tr: '[Student] ──< takes >── [Course]\n  id (anahtar)   grade        code (anahtar)\n  name                        title\n  city                        credits\n  year\n\nM:N eşleme: bir öğrenci birçok ders alır,\n            bir dersin birçok öğrencisi vardır\n1:N örnekleri: bir bölümün birçok öğretmeni vardır\n         1:1: bir ülkenin bir başkenti vardır\nDikdörtgen = varlık, eşkenar dörtgen = ilişki, oval = öznitelik',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Donne la cardinalité de chaque association : (1) Département – emploie – Enseignant (un enseignant appartient à un seul département) ; (2) Étudiant – emprunte – Livre (un exemplaire est prêté à un seul étudiant à la fois, un étudiant emprunte plusieurs livres) ; (3) Enseignant – enseigne – Cours (un cours peut avoir plusieurs enseignants).',
          en: 'Give each relationship’s cardinality: (1) Department – employs – Teacher (a teacher belongs to a single department); (2) Student – borrows – Book (a copy is lent to one student at a time, a student borrows several books); (3) Teacher – teaches – Course (a course can have several teachers).',
          tr: 'Her ilişkinin eşleme sayısını ver: (1) Bölüm – çalıştırır – Öğretmen (bir öğretmen tek bir bölüme aittir); (2) Öğrenci – ödünç alır – Kitap (bir kopya aynı anda tek öğrenciye verilir, bir öğrenci birçok kitap alır); (3) Öğretmen – verir – Ders (bir dersin birden fazla öğretmeni olabilir).',
        },
        solution: {
          fr: '(1) 1:N : un département, plusieurs enseignants. (2) 1:N : un étudiant, plusieurs exemplaires ; chaque exemplaire chez un seul étudiant. (3) M:N : un enseignant donne plusieurs cours et un cours a plusieurs enseignants. En semaine 3, on verra que chaque M:N devient une table à part.',
          en: '(1) 1:N: one department, several teachers. (2) 1:N: one student, several copies; each copy with one student only. (3) M:N: a teacher teaches several courses and a course has several teachers. Week 3 shows that each M:N becomes a separate table.',
          tr: '(1) 1:N: bir bölüm, birçok öğretmen. (2) 1:N: bir öğrenci, birçok kopya; her kopya yalnızca bir öğrencide. (3) M:N: bir öğretmen birçok ders verir ve bir dersin birçok öğretmeni vardır. 3. haftada her M:N’nin ayrı bir tablo olduğu görülecek.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans un diagramme E-R, où place-t-on la note d’un étudiant à un cours ?',
        en: 'In an E-R diagram, where does a student’s grade in a course go?',
        tr: 'E-R diyagramında bir öğrencinin bir dersteki notu nereye konur?',
      },
      options: {
        fr: ['Sur l’entité Étudiant', 'Sur l’entité Cours', 'Sur l’association « suit »'],
        en: ['On the Student entity', 'On the Course entity', 'On the “takes” relationship'],
        tr: ['Öğrenci varlığına', 'Ders varlığına', '“alır” ilişkisine'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'La note dépend à la fois de l’étudiant ET du cours : elle appartient à l’association qui les relie.',
        en: 'The grade depends on both the student AND the course: it belongs to the relationship linking them.',
        tr: 'Not hem öğrenciye HEM derse bağlıdır: onları bağlayan ilişkiye aittir.',
      },
    },
  },
  {
    id: 'db-w03-relational-model',
    week: 3,
    title: {
      fr: 'Le modèle relationnel et les clés',
      en: 'The relational model and keys',
      tr: 'İlişkisel model ve anahtarlar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Dans le modèle relationnel, les données sont dans des tables (relations) ; une ligne est un tuple, une colonne un attribut. Super-clé : ensemble d’attributs qui identifie une ligne de façon unique. Clé candidate : super-clé minimale. Clé primaire : la clé candidate choisie. Clé étrangère : colonne qui fait référence à la clé primaire d’une autre table (intégrité référentielle).',
          en: 'In the relational model, data lives in tables (relations); a row is a tuple, a column an attribute. Superkey: a set of attributes that uniquely identifies a row. Candidate key: a minimal superkey. Primary key: the chosen candidate key. Foreign key: a column referring to another table’s primary key (referential integrity).',
          tr: 'İlişkisel modelde veriler tablolarda (ilişkiler) bulunur; satır bir demet, sütun bir özniteliktir. Süper anahtar: bir satırı tek olarak belirleyen öznitelik kümesi. Aday anahtar: en küçük süper anahtar. Birincil anahtar: seçilen aday anahtar. Yabancı anahtar: başka bir tablonun birincil anahtarına başvuran sütun (bilgi bütünlüğü).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Passage du modèle E-R aux tables\n• chaque entité → une table, sa clé → clé primaire\n• association 1:N → clé étrangère du côté N\n• association M:N → une nouvelle table avec les deux clés\n                    (+ les attributs de l’association)\n\nStudent(id, name, city, year)\nCourse(code, title, credits)\nEnrollment(student_id → Student, course_code → Course, grade)\n           clé primaire = (student_id, course_code)',
          en: 'From the E-R model to tables\n• each entity → a table, its key → primary key\n• 1:N relationship → foreign key on the N side\n• M:N relationship → a new table with both keys\n                     (+ the relationship’s attributes)\n\nStudent(id, name, city, year)\nCourse(code, title, credits)\nEnrollment(student_id → Student, course_code → Course, grade)\n           primary key = (student_id, course_code)',
          tr: 'E-R modelinden tablolara\n• her varlık → bir tablo, anahtarı → birincil anahtar\n• 1:N ilişki → N tarafında yabancı anahtar\n• M:N ilişki → iki anahtarı içeren yeni bir tablo\n               (+ ilişkinin öznitelikleri)\n\nStudent(id, name, city, year)\nCourse(code, title, credits)\nEnrollment(student_id → Student, course_code → Course, grade)\n           birincil anahtar = (student_id, course_code)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Dans la table Student(id, name, city, year, email), où id et email sont uniques : (1) {id, name} est-elle une super-clé ? une clé candidate ? (2) Quelles sont les clés candidates ? (3) Peut-on insérer dans Enrollment la ligne (9, \'CME226\', 80) s’il n’y a pas d’étudiant 9 ?',
          en: 'In the table Student(id, name, city, year, email), where id and email are unique: (1) is {id, name} a superkey? a candidate key? (2) What are the candidate keys? (3) Can the row (9, \'CME226\', 80) be inserted into Enrollment if there is no student 9?',
          tr: 'id ve email’in benzersiz olduğu Student(id, name, city, year, email) tablosunda: (1) {id, name} bir süper anahtar mıdır? aday anahtar mıdır? (2) Aday anahtarlar nelerdir? (3) 9 numaralı öğrenci yoksa Enrollment’a (9, \'CME226\', 80) satırı eklenebilir mi?',
        },
        solution: {
          fr: '(1) Oui, c’est une super-clé (elle contient id, déjà unique), mais pas une clé candidate : elle n’est pas minimale, on peut enlever name. (2) {id} et {email}. On en choisit une comme clé primaire, souvent id. (3) Non : student_id est une clé étrangère vers Student, et 9 n’existe pas. Le SGBD refuse l’insertion (intégrité référentielle).',
          en: '(1) Yes, it is a superkey (it contains id, already unique), but not a candidate key: it isn’t minimal, name can be removed. (2) {id} and {email}. One is chosen as primary key, often id. (3) No: student_id is a foreign key to Student, and 9 doesn’t exist. The DBMS refuses the insert (referential integrity).',
          tr: '(1) Evet, süper anahtardır (zaten benzersiz olan id’yi içerir), ama aday anahtar değildir: en küçük değildir, name çıkarılabilir. (2) {id} ve {email}. Biri birincil anahtar seçilir, çoğu zaman id. (3) Hayır: student_id, Student’a bir yabancı anahtardır ve 9 yoktur. VTYS eklemeyi reddeder (bilgi bütünlüğü).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment représente-t-on une association M:N dans le modèle relationnel ?',
        en: 'How is an M:N relationship represented in the relational model?',
        tr: 'M:N ilişki ilişkisel modelde nasıl gösterilir?',
      },
      options: {
        fr: ['Une clé étrangère dans l’une des deux tables', 'Une table à part avec les deux clés', 'On fusionne les deux tables'],
        en: ['A foreign key in one of the two tables', 'A separate table with both keys', 'The two tables are merged'],
        tr: ['İki tablodan birinde yabancı anahtar', 'İki anahtarı içeren ayrı bir tablo', 'İki tablo birleştirilir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Une seule clé étrangère ne peut pas contenir plusieurs valeurs. On crée une table de liaison comme Enrollment, avec les deux clés.',
        en: 'A single foreign key cannot hold several values. A link table like Enrollment is created, with both keys.',
        tr: 'Tek bir yabancı anahtar birden fazla değer tutamaz. Enrollment gibi iki anahtarı içeren bir bağlantı tablosu oluşturulur.',
      },
    },
  },
  {
    id: 'db-w04-ddl',
    week: 4,
    title: {
      fr: 'Créer les tables : SQL DDL et contraintes',
      en: 'Creating tables: SQL DDL and constraints',
      tr: 'Tablo oluşturma: SQL DDL ve kısıtlar',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'CREATE TABLE Student (\n    id    INT PRIMARY KEY,\n    name  VARCHAR(50) NOT NULL,\n    city  VARCHAR(30),\n    year  INT CHECK (year BETWEEN 1 AND 4)\n);\nCREATE TABLE Course (\n    code    CHAR(6) PRIMARY KEY,\n    title   VARCHAR(80) NOT NULL UNIQUE,\n    credits INT DEFAULT 5\n);\nCREATE TABLE Enrollment (\n    student_id  INT REFERENCES Student(id) ON DELETE CASCADE,\n    course_code CHAR(6) REFERENCES Course(code),\n    grade       INT CHECK (grade BETWEEN 0 AND 100),\n    PRIMARY KEY (student_id, course_code)\n);\nALTER TABLE Student ADD email VARCHAR(80);     -- modifier la structure\nDROP TABLE Enrollment;                         -- supprimer (structure + données)',
          en: 'CREATE TABLE Student (\n    id    INT PRIMARY KEY,\n    name  VARCHAR(50) NOT NULL,\n    city  VARCHAR(30),\n    year  INT CHECK (year BETWEEN 1 AND 4)\n);\nCREATE TABLE Course (\n    code    CHAR(6) PRIMARY KEY,\n    title   VARCHAR(80) NOT NULL UNIQUE,\n    credits INT DEFAULT 5\n);\nCREATE TABLE Enrollment (\n    student_id  INT REFERENCES Student(id) ON DELETE CASCADE,\n    course_code CHAR(6) REFERENCES Course(code),\n    grade       INT CHECK (grade BETWEEN 0 AND 100),\n    PRIMARY KEY (student_id, course_code)\n);\nALTER TABLE Student ADD email VARCHAR(80);     -- change the structure\nDROP TABLE Enrollment;                         -- delete (structure + data)',
          tr: 'CREATE TABLE Student (\n    id    INT PRIMARY KEY,\n    name  VARCHAR(50) NOT NULL,\n    city  VARCHAR(30),\n    year  INT CHECK (year BETWEEN 1 AND 4)\n);\nCREATE TABLE Course (\n    code    CHAR(6) PRIMARY KEY,\n    title   VARCHAR(80) NOT NULL UNIQUE,\n    credits INT DEFAULT 5\n);\nCREATE TABLE Enrollment (\n    student_id  INT REFERENCES Student(id) ON DELETE CASCADE,\n    course_code CHAR(6) REFERENCES Course(code),\n    grade       INT CHECK (grade BETWEEN 0 AND 100),\n    PRIMARY KEY (student_id, course_code)\n);\nALTER TABLE Student ADD email VARCHAR(80);     -- yapıyı değiştir\nDROP TABLE Enrollment;                         -- sil (yapı + veri)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Pour toute la suite du cours, la base contient 5 étudiants (Ali, Karabuk, 2e année ; Ayse, Ankara, 1re ; Emre, Karabuk, 3e ; Zeynep, Istanbul, 2e ; Can, Ankara, 1re), 3 cours (CME225 OOP 6 crédits, CME226 Databases 5, BLM221 Logic Design 4) et 6 inscriptions : Ali CME225 85 et CME226 70, Ayse CME226 90, Emre CME225 55 et BLM221 75, Zeynep CME226 60. Can n’a aucune inscription.',
          en: 'For the rest of the course, the database holds 5 students (Ali, Karabuk, year 2; Ayse, Ankara, year 1; Emre, Karabuk, year 3; Zeynep, Istanbul, year 2; Can, Ankara, year 1), 3 courses (CME225 OOP 6 credits, CME226 Databases 5, BLM221 Logic Design 4) and 6 enrollments: Ali CME225 85 and CME226 70, Ayse CME226 90, Emre CME225 55 and BLM221 75, Zeynep CME226 60. Can has no enrollment.',
          tr: 'Dersin geri kalanında veritabanında 5 öğrenci (Ali, Karabük, 2. sınıf; Ayşe, Ankara, 1.; Emre, Karabük, 3.; Zeynep, İstanbul, 2.; Can, Ankara, 1.), 3 ders (CME225 OOP 6 kredi, CME226 Databases 5, BLM221 Logic Design 4) ve 6 kayıt vardır: Ali CME225 85 ve CME226 70, Ayşe CME226 90, Emre CME225 55 ve BLM221 75, Zeynep CME226 60. Can’in hiç kaydı yoktur.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec ces tables, lesquelles de ces instructions sont refusées, et par quelle contrainte ? (1) INSERT INTO Student VALUES (6, NULL, \'Bursa\', 2); (2) INSERT INTO Student VALUES (7, \'Deniz\', \'Bursa\', 5); (3) INSERT INTO Course (code, title) VALUES (\'BLM112\', \'OOP\'); (4) INSERT INTO Course (code, title) VALUES (\'BLM112\', \'Programming II\'); — combien de crédits a ce cours ?',
          en: 'With these tables, which statements are refused, and by which constraint? (1) INSERT INTO Student VALUES (6, NULL, \'Bursa\', 2); (2) INSERT INTO Student VALUES (7, \'Deniz\', \'Bursa\', 5); (3) INSERT INTO Course (code, title) VALUES (\'BLM112\', \'OOP\'); (4) INSERT INTO Course (code, title) VALUES (\'BLM112\', \'Programming II\'); — how many credits does that course have?',
          tr: 'Bu tablolarla hangi komutlar hangi kısıt yüzünden reddedilir? (1) INSERT INTO Student VALUES (6, NULL, \'Bursa\', 2); (2) INSERT INTO Student VALUES (7, \'Deniz\', \'Bursa\', 5); (3) INSERT INTO Course (code, title) VALUES (\'BLM112\', \'OOP\'); (4) INSERT INTO Course (code, title) VALUES (\'BLM112\', \'Programming II\'); — bu dersin kaç kredisi vardır?',
        },
        solution: {
          fr: '(1) Refusée : name est NOT NULL. (2) Refusée : CHECK (year BETWEEN 1 AND 4), et 5 en sort. (3) Refusée : le titre « OOP » existe déjà et title est UNIQUE. (4) Acceptée ; credits n’est pas donné, donc il prend la valeur DEFAULT 5.',
          en: '(1) Refused: name is NOT NULL. (2) Refused: CHECK (year BETWEEN 1 AND 4), and 5 is outside. (3) Refused: the title “OOP” already exists and title is UNIQUE. (4) Accepted; credits is not given, so it takes the DEFAULT 5.',
          tr: '(1) Reddedilir: name NOT NULL’dır. (2) Reddedilir: CHECK (year BETWEEN 1 AND 4) ve 5 bunun dışındadır. (3) Reddedilir: “OOP” adı zaten var ve title UNIQUE’tir. (4) Kabul edilir; credits verilmediği için DEFAULT 5 değerini alır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait ON DELETE CASCADE sur la clé étrangère student_id ?',
        en: 'What does ON DELETE CASCADE on the student_id foreign key do?',
        tr: 'student_id yabancı anahtarındaki ON DELETE CASCADE ne yapar?',
      },
      options: {
        fr: ['Il interdit de supprimer un étudiant', 'Supprimer un étudiant supprime aussi ses inscriptions', 'Il met les notes à NULL'],
        en: ['It forbids deleting a student', 'Deleting a student also deletes their enrollments', 'It sets grades to NULL'],
        tr: ['Öğrenci silmeyi yasaklar', 'Bir öğrenci silinince kayıtları da silinir', 'Notları NULL yapar'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'CASCADE propage la suppression aux lignes qui font référence à l’étudiant. Sans cette option, le SGBD refuserait de supprimer un étudiant encore inscrit.',
        en: 'CASCADE spreads the delete to rows referring to the student. Without it, the DBMS would refuse to delete a student who is still enrolled.',
        tr: 'CASCADE silmeyi öğrenciye başvuran satırlara yayar. Bu seçenek olmasaydı VTYS hâlâ kayıtlı bir öğrenciyi silmeyi reddederdi.',
      },
    },
  },
  {
    id: 'sql-select',
    week: 5,
    title: { fr: 'Lire des données avec SELECT', en: 'Reading data with SELECT', tr: 'SELECT ile veri okuma' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'SELECT choisit les colonnes, FROM la table. * prend toutes les colonnes. On peut calculer une colonne et lui donner un nom avec AS. DISTINCT supprime les lignes en double du résultat. SELECT ne modifie jamais la table : il produit une nouvelle table temporaire, le résultat.',
          en: 'SELECT chooses the columns, FROM the table. * takes every column. A column can be computed and named with AS. DISTINCT removes duplicate rows from the result. SELECT never changes the table: it produces a new temporary table, the result.',
          tr: 'SELECT sütunları, FROM tabloyu seçer. * tüm sütunları alır. Bir sütun hesaplanabilir ve AS ile adlandırılabilir. DISTINCT sonuçtaki tekrar eden satırları kaldırır. SELECT tabloyu asla değiştirmez: yeni, geçici bir tablo, yani sonucu üretir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'SELECT * FROM Student;                      -- tout\nSELECT name, city FROM Student;             -- 2 colonnes, 5 lignes\nSELECT title, credits * 25 AS hours         -- colonne calculée\nFROM Course;\n-- OOP 150 | Databases 125 | Logic Design 100\n\nSELECT DISTINCT city FROM Student;\n-- Karabuk | Ankara | Istanbul   (3 villes, pas 5 lignes)',
          en: 'SELECT * FROM Student;                      -- everything\nSELECT name, city FROM Student;             -- 2 columns, 5 rows\nSELECT title, credits * 25 AS hours         -- computed column\nFROM Course;\n-- OOP 150 | Databases 125 | Logic Design 100\n\nSELECT DISTINCT city FROM Student;\n-- Karabuk | Ankara | Istanbul   (3 cities, not 5 rows)',
          tr: 'SELECT * FROM Student;                      -- hepsi\nSELECT name, city FROM Student;             -- 2 sütun, 5 satır\nSELECT title, credits * 25 AS hours         -- hesaplanan sütun\nFROM Course;\n-- OOP 150 | Databases 125 | Logic Design 100\n\nSELECT DISTINCT city FROM Student;\n-- Karabuk | Ankara | Istanbul   (5 satır değil, 3 şehir)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris les requêtes et donne le nombre de lignes du résultat : (1) le code et le titre de tous les cours ; (2) les différentes années d’études présentes dans Student ; (3) le nom de chaque étudiant et son année + 1, nommée next_year.',
          en: 'Write the queries and give the number of result rows: (1) the code and title of every course; (2) the different study years present in Student; (3) each student’s name and their year + 1, named next_year.',
          tr: 'Sorguları yaz ve sonuçtaki satır sayısını ver: (1) tüm derslerin kodu ve adı; (2) Student’ta bulunan farklı sınıf yılları; (3) her öğrencinin adı ve next_year adıyla yılı + 1.',
        },
        solution: {
          fr: '(1) SELECT code, title FROM Course; → 3 lignes. (2) SELECT DISTINCT year FROM Student; → 3 lignes (1, 2, 3), car Ali et Zeynep sont en 2e année, Ayse et Can en 1re. (3) SELECT name, year + 1 AS next_year FROM Student; → 5 lignes (Ali 3, Ayse 2, Emre 4, Zeynep 3, Can 2).',
          en: '(1) SELECT code, title FROM Course; → 3 rows. (2) SELECT DISTINCT year FROM Student; → 3 rows (1, 2, 3), since Ali and Zeynep are in year 2, Ayse and Can in year 1. (3) SELECT name, year + 1 AS next_year FROM Student; → 5 rows (Ali 3, Ayse 2, Emre 4, Zeynep 3, Can 2).',
          tr: '(1) SELECT code, title FROM Course; → 3 satır. (2) SELECT DISTINCT year FROM Student; → 3 satır (1, 2, 3), çünkü Ali ve Zeynep 2., Ayşe ve Can 1. sınıftadır. (3) SELECT name, year + 1 AS next_year FROM Student; → 5 satır (Ali 3, Ayşe 2, Emre 4, Zeynep 3, Can 2).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de lignes renvoie SELECT DISTINCT city FROM Student ?',
        en: 'How many rows does SELECT DISTINCT city FROM Student return?',
        tr: 'SELECT DISTINCT city FROM Student kaç satır döndürür?',
      },
      options: { fr: ['2', '3', '5'], en: ['2', '3', '5'], tr: ['2', '3', '5'] },
      answerIndex: 1,
      explanation: {
        fr: 'Les 5 étudiants viennent de Karabuk (2), Ankara (2) et Istanbul (1) : DISTINCT garde chaque ville une seule fois, donc 3 lignes.',
        en: 'The 5 students come from Karabuk (2), Ankara (2) and Istanbul (1): DISTINCT keeps each city once, so 3 rows.',
        tr: '5 öğrenci Karabük (2), Ankara (2) ve İstanbul’dan (1) gelir: DISTINCT her şehri bir kez tutar, yani 3 satır.',
      },
    },
  },
  {
    id: 'sql-where',
    week: 6,
    title: {
      fr: 'Filtrer et trier : WHERE, LIKE, ORDER BY',
      en: 'Filtering and sorting: WHERE, LIKE, ORDER BY',
      tr: 'Filtreleme ve sıralama: WHERE, LIKE, ORDER BY',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Opérateurs de WHERE\n=  <>  <  >  <=  >=        AND  OR  NOT\nBETWEEN 50 AND 70           (bornes comprises)\nIN (\'Ankara\', \'Bursa\')\nLIKE \'A%\'   % = n’importe quelle suite, _ = un seul caractère\nIS NULL / IS NOT NULL       (jamais = NULL)\n\nSELECT name FROM Student\nWHERE city = \'Ankara\' OR year >= 3\nORDER BY name;              -- Ayse | Can | Emre\n\nORDER BY year DESC, name    -- tri décroissant, puis alphabétique',
          en: 'WHERE operators\n=  <>  <  >  <=  >=        AND  OR  NOT\nBETWEEN 50 AND 70           (bounds included)\nIN (\'Ankara\', \'Bursa\')\nLIKE \'A%\'   % = any sequence, _ = exactly one character\nIS NULL / IS NOT NULL       (never = NULL)\n\nSELECT name FROM Student\nWHERE city = \'Ankara\' OR year >= 3\nORDER BY name;              -- Ayse | Can | Emre\n\nORDER BY year DESC, name    -- descending, then alphabetical',
          tr: 'WHERE işleçleri\n=  <>  <  >  <=  >=        AND  OR  NOT\nBETWEEN 50 AND 70           (sınırlar dahil)\nIN (\'Ankara\', \'Bursa\')\nLIKE \'A%\'   % = herhangi bir dizi, _ = tek bir karakter\nIS NULL / IS NOT NULL       (asla = NULL değil)\n\nSELECT name FROM Student\nWHERE city = \'Ankara\' OR year >= 3\nORDER BY name;              -- Ayse | Can | Emre\n\nORDER BY year DESC, name    -- azalan, sonra alfabetik',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Ordre logique d’une requête : FROM (quelle table), puis WHERE (quelles lignes), puis SELECT (quelles colonnes), puis ORDER BY (dans quel ordre). Attention à la priorité : AND passe avant OR, mets des parenthèses en cas de doute.',
          en: 'Logical order of a query: FROM (which table), then WHERE (which rows), then SELECT (which columns), then ORDER BY (in which order). Mind precedence: AND comes before OR, use parentheses when in doubt.',
          tr: 'Sorgunun mantıksal sırası: FROM (hangi tablo), sonra WHERE (hangi satırlar), sonra SELECT (hangi sütunlar), sonra ORDER BY (hangi sırayla). Önceliğe dikkat: AND, OR’dan önce gelir; emin değilsen parantez kullan.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Donne le résultat de : SELECT name, year FROM Student WHERE name LIKE \'%e%\' ORDER BY year DESC, name;. Attention : LIKE distingue ici majuscules et minuscules.',
          en: 'Give the result of: SELECT name, year FROM Student WHERE name LIKE \'%e%\' ORDER BY year DESC, name;. Careful: LIKE is case sensitive here.',
          tr: 'Şu sorgunun sonucunu ver: SELECT name, year FROM Student WHERE name LIKE \'%e%\' ORDER BY year DESC, name;. Dikkat: burada LIKE büyük-küçük harf ayırır.',
        },
        solution: {
          fr: 'Les noms contenant un « e » minuscule : Ayse, Emre (le « e » final), Zeynep. Ali et Can n’en ont pas. Tri par année décroissante : Emre 3, Zeynep 2, Ayse 1. Remarque : dans certains SGBD (MySQL, SQLite), LIKE ignore la casse par défaut ; le résultat serait le même ici.',
          en: 'Names containing a lowercase “e”: Ayse, Emre (the final “e”), Zeynep. Ali and Can have none. Sorted by descending year: Emre 3, Zeynep 2, Ayse 1. Note: in some DBMSs (MySQL, SQLite), LIKE ignores case by default; the result would be the same here.',
          tr: 'Küçük “e” içeren adlar: Ayse, Emre (sondaki “e”), Zeynep. Ali ve Can’da yoktur. Azalan yıla göre: Emre 3, Zeynep 2, Ayse 1. Not: bazı VTYS’lerde (MySQL, SQLite) LIKE varsayılan olarak büyük-küçük harfi yok sayar; burada sonuç aynı olurdu.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment trouver les étudiants dont la ville n’est pas renseignée ?',
        en: 'How do you find students whose city is missing?',
        tr: 'Şehri girilmemiş öğrenciler nasıl bulunur?',
      },
      options: { fr: ['WHERE city = NULL', 'WHERE city IS NULL', "WHERE city = ''"], en: ['WHERE city = NULL', 'WHERE city IS NULL', "WHERE city = ''"], tr: ['WHERE city = NULL', 'WHERE city IS NULL', "WHERE city = ''"] },
      answerIndex: 1,
      explanation: {
        fr: 'NULL signifie « inconnu » : toute comparaison avec = NULL donne « inconnu », jamais vrai. Il faut IS NULL. Une chaîne vide \'\' n’est pas NULL.',
        en: 'NULL means “unknown”: any comparison with = NULL gives “unknown”, never true. Use IS NULL. An empty string \'\' is not NULL.',
        tr: 'NULL “bilinmiyor” demektir: = NULL ile her karşılaştırma “bilinmiyor” verir, asla doğru değildir. IS NULL kullanılmalıdır. Boş dize \'\' NULL değildir.',
      },
    },
  },
  {
    id: 'db-w07-aggregates',
    week: 7,
    title: {
      fr: 'Agrégats, GROUP BY, HAVING et révision de la vize',
      en: 'Aggregates, GROUP BY, HAVING and midterm review',
      tr: 'Toplama fonksiyonları, GROUP BY, HAVING ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les fonctions d’agrégation résument plusieurs lignes en une valeur : COUNT, SUM, AVG, MIN, MAX. GROUP BY forme des groupes de lignes ayant la même valeur, et l’agrégat est calculé par groupe. WHERE filtre les lignes AVANT le regroupement ; HAVING filtre les groupes APRÈS. Toute colonne du SELECT qui n’est pas un agrégat doit apparaître dans le GROUP BY.',
          en: 'Aggregate functions summarize several rows into one value: COUNT, SUM, AVG, MIN, MAX. GROUP BY forms groups of rows sharing a value, and the aggregate is computed per group. WHERE filters rows BEFORE grouping; HAVING filters groups AFTER. Every SELECT column that isn’t an aggregate must appear in GROUP BY.',
          tr: 'Toplama fonksiyonları birçok satırı tek bir değerde özetler: COUNT, SUM, AVG, MIN, MAX. GROUP BY aynı değere sahip satırlardan gruplar oluşturur ve toplama her grup için hesaplanır. WHERE satırları gruplamadan ÖNCE, HAVING grupları SONRA filtreler. SELECT’teki toplama olmayan her sütun GROUP BY’da yer almalıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'SELECT city, COUNT(*) AS nb\nFROM Student\nGROUP BY city;\n-- Ankara 2 | Istanbul 1 | Karabuk 2\n\nSELECT course_code, COUNT(*), AVG(grade)\nFROM Enrollment\nGROUP BY course_code\nHAVING COUNT(*) >= 2;\n-- CME225 2 70.0 | CME226 3 73.33   (BLM221 n’a qu’une inscription)',
          en: 'SELECT city, COUNT(*) AS nb\nFROM Student\nGROUP BY city;\n-- Ankara 2 | Istanbul 1 | Karabuk 2\n\nSELECT course_code, COUNT(*), AVG(grade)\nFROM Enrollment\nGROUP BY course_code\nHAVING COUNT(*) >= 2;\n-- CME225 2 70.0 | CME226 3 73.33   (BLM221 has only one enrollment)',
          tr: 'SELECT city, COUNT(*) AS nb\nFROM Student\nGROUP BY city;\n-- Ankara 2 | Istanbul 1 | Karabuk 2\n\nSELECT course_code, COUNT(*), AVG(grade)\nFROM Enrollment\nGROUP BY course_code\nHAVING COUNT(*) >= 2;\n-- CME225 2 70.0 | CME226 3 73.33   (BLM221’in tek kaydı var)',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ SGBD vs fichiers, 3 niveaux, indépendance, DDL / DML / DCL\n✔ Modèle E-R : entités, attributs, associations, cardinalités\n✔ Passage aux tables ; super-clé, clé candidate, primaire, étrangère\n✔ CREATE TABLE, NOT NULL, UNIQUE, CHECK, DEFAULT, REFERENCES\n✔ SELECT, AS, DISTINCT\n✔ WHERE, BETWEEN, IN, LIKE, IS NULL, ORDER BY\n✔ COUNT / SUM / AVG / MIN / MAX, GROUP BY, HAVING',
          en: '✔ DBMS vs files, 3 levels, independence, DDL / DML / DCL\n✔ E-R model: entities, attributes, relationships, cardinalities\n✔ Mapping to tables; superkey, candidate, primary, foreign key\n✔ CREATE TABLE, NOT NULL, UNIQUE, CHECK, DEFAULT, REFERENCES\n✔ SELECT, AS, DISTINCT\n✔ WHERE, BETWEEN, IN, LIKE, IS NULL, ORDER BY\n✔ COUNT / SUM / AVG / MIN / MAX, GROUP BY, HAVING',
          tr: '✔ VTYS ve dosyalar, 3 seviye, bağımsızlık, DDL / DML / DCL\n✔ E-R modeli: varlıklar, öznitelikler, ilişkiler, eşleme sayıları\n✔ Tablolara dönüştürme; süper, aday, birincil, yabancı anahtar\n✔ CREATE TABLE, NOT NULL, UNIQUE, CHECK, DEFAULT, REFERENCES\n✔ SELECT, AS, DISTINCT\n✔ WHERE, BETWEEN, IN, LIKE, IS NULL, ORDER BY\n✔ COUNT / SUM / AVG / MIN / MAX, GROUP BY, HAVING',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Écris la requête qui donne, pour chaque cours, la meilleure et la plus basse note. (2) Que renvoie SELECT COUNT(*) FROM Enrollment WHERE grade >= 70; ? (3) Pourquoi SELECT city, name, COUNT(*) FROM Student GROUP BY city; est-elle incorrecte ?',
          en: '(1) Write the query giving, for each course, the best and the lowest grade. (2) What does SELECT COUNT(*) FROM Enrollment WHERE grade >= 70; return? (3) Why is SELECT city, name, COUNT(*) FROM Student GROUP BY city; wrong?',
          tr: '(1) Her ders için en yüksek ve en düşük notu veren sorguyu yaz. (2) SELECT COUNT(*) FROM Enrollment WHERE grade >= 70; ne döndürür? (3) SELECT city, name, COUNT(*) FROM Student GROUP BY city; neden yanlıştır?',
        },
        solution: {
          fr: '(1) SELECT course_code, MAX(grade), MIN(grade) FROM Enrollment GROUP BY course_code; → BLM221 75 75, CME225 85 55, CME226 90 60. (2) Les notes ≥ 70 sont 85, 70, 90 et 75 : 4. (3) Un groupe (par exemple Ankara) contient plusieurs noms (Ayse et Can) : name n’a pas une valeur unique par groupe. Il faut l’ajouter au GROUP BY ou l’agréger.',
          en: '(1) SELECT course_code, MAX(grade), MIN(grade) FROM Enrollment GROUP BY course_code; → BLM221 75 75, CME225 85 55, CME226 90 60. (2) Grades ≥ 70 are 85, 70, 90 and 75: 4. (3) A group (Ankara, for example) holds several names (Ayse and Can): name has no single value per group. It must be added to GROUP BY or aggregated.',
          tr: '(1) SELECT course_code, MAX(grade), MIN(grade) FROM Enrollment GROUP BY course_code; → BLM221 75 75, CME225 85 55, CME226 90 60. (2) ≥ 70 olan notlar 85, 70, 90 ve 75: 4. (3) Bir grup (örneğin Ankara) birden fazla ad içerir (Ayşe ve Can): name’in grup başına tek bir değeri yoktur. GROUP BY’a eklenmeli veya toplanmalıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle clause filtre les groupes après un GROUP BY ?',
        en: 'Which clause filters groups after a GROUP BY?',
        tr: 'GROUP BY’dan sonra grupları hangi ifade filtreler?',
      },
      options: { fr: ['WHERE', 'HAVING', 'ORDER BY'], en: ['WHERE', 'HAVING', 'ORDER BY'], tr: ['WHERE', 'HAVING', 'ORDER BY'] },
      answerIndex: 1,
      explanation: {
        fr: 'WHERE agit sur les lignes avant le regroupement et ne peut pas utiliser COUNT ou AVG. HAVING agit sur les groupes, après.',
        en: 'WHERE works on rows before grouping and cannot use COUNT or AVG. HAVING works on groups, afterwards.',
        tr: 'WHERE gruplamadan önce satırlar üzerinde çalışır ve COUNT veya AVG kullanamaz. HAVING ise sonra, gruplar üzerinde çalışır.',
      },
    },
  },
  {
    id: 'sql-join',
    week: 8,
    title: { fr: 'Les jointures', en: 'Joins', tr: 'Birleştirmeler (JOIN)' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une jointure combine les lignes de plusieurs tables grâce à une condition, en général clé étrangère = clé primaire. INNER JOIN ne garde que les lignes qui ont une correspondance des deux côtés. LEFT JOIN garde toutes les lignes de la table de gauche ; quand il n’y a pas de correspondance, les colonnes de droite valent NULL. Sans condition, on obtient le produit cartésien : toutes les paires possibles.',
          en: 'A join combines rows of several tables through a condition, usually foreign key = primary key. INNER JOIN keeps only rows with a match on both sides. LEFT JOIN keeps every row of the left table; with no match, the right-hand columns are NULL. With no condition, you get the Cartesian product: every possible pair.',
          tr: 'Birleştirme, birden fazla tablonun satırlarını genellikle yabancı anahtar = birincil anahtar koşuluyla bir araya getirir. INNER JOIN yalnızca iki tarafta eşi olan satırları tutar. LEFT JOIN sol tablonun tüm satırlarını tutar; eş yoksa sağ taraftaki sütunlar NULL olur. Koşul olmadan Kartezyen çarpım elde edilir: tüm olası çiftler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'SELECT s.name, c.title, e.grade\nFROM Student s\nJOIN Enrollment e ON s.id = e.student_id\nJOIN Course c     ON c.code = e.course_code\nWHERE e.grade >= 70\nORDER BY e.grade DESC;\n-- Ayse Databases 90 | Ali OOP 85 | Emre Logic Design 75 | Ali Databases 70\n\n-- Étudiants sans aucune inscription\nSELECT s.name\nFROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id\nWHERE e.student_id IS NULL;          -- Can',
          en: 'SELECT s.name, c.title, e.grade\nFROM Student s\nJOIN Enrollment e ON s.id = e.student_id\nJOIN Course c     ON c.code = e.course_code\nWHERE e.grade >= 70\nORDER BY e.grade DESC;\n-- Ayse Databases 90 | Ali OOP 85 | Emre Logic Design 75 | Ali Databases 70\n\n-- Students with no enrollment at all\nSELECT s.name\nFROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id\nWHERE e.student_id IS NULL;          -- Can',
          tr: 'SELECT s.name, c.title, e.grade\nFROM Student s\nJOIN Enrollment e ON s.id = e.student_id\nJOIN Course c     ON c.code = e.course_code\nWHERE e.grade >= 70\nORDER BY e.grade DESC;\n-- Ayse Databases 90 | Ali OOP 85 | Emre Logic Design 75 | Ali Databases 70\n\n-- Hiç kaydı olmayan öğrenciler\nSELECT s.name\nFROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id\nWHERE e.student_id IS NULL;          -- Can',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien de lignes donne SELECT * FROM Student, Course; (sans condition) ? (2) Écris la requête qui donne, pour chaque étudiant, son nom et son nombre de cours, y compris ceux qui n’en ont aucun. Quel est le résultat ?',
          en: '(1) How many rows does SELECT * FROM Student, Course; (no condition) give? (2) Write the query giving each student’s name and number of courses, including those with none. What is the result?',
          tr: '(1) SELECT * FROM Student, Course; (koşulsuz) kaç satır verir? (2) Hiç dersi olmayanlar dahil, her öğrencinin adını ve ders sayısını veren sorguyu yaz. Sonuç nedir?',
        },
        solution: {
          fr: '(1) Produit cartésien : 5 × 3 = 15 lignes, pour la plupart sans signification. (2) SELECT s.name, COUNT(e.course_code) FROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id GROUP BY s.id, s.name; → Ali 2, Ayse 1, Emre 2, Zeynep 1, Can 0. Il faut LEFT JOIN pour garder Can, et COUNT(e.course_code) plutôt que COUNT(*) : COUNT(colonne) ignore les NULL, donc Can a 0 et non 1.',
          en: '(1) Cartesian product: 5 × 3 = 15 rows, mostly meaningless. (2) SELECT s.name, COUNT(e.course_code) FROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id GROUP BY s.id, s.name; → Ali 2, Ayse 1, Emre 2, Zeynep 1, Can 0. LEFT JOIN is needed to keep Can, and COUNT(e.course_code) rather than COUNT(*): COUNT(column) ignores NULLs, so Can gets 0, not 1.',
          tr: '(1) Kartezyen çarpım: 5 × 3 = 15 satır, çoğu anlamsız. (2) SELECT s.name, COUNT(e.course_code) FROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id GROUP BY s.id, s.name; → Ali 2, Ayşe 1, Emre 2, Zeynep 1, Can 0. Can’i tutmak için LEFT JOIN, COUNT(*) yerine COUNT(e.course_code) gerekir: COUNT(sütun) NULL’ları saymaz, böylece Can 1 değil 0 alır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle jointure garde aussi les étudiants qui n’ont aucune inscription ?',
        en: 'Which join also keeps students with no enrollment?',
        tr: 'Hangi birleştirme hiç kaydı olmayan öğrencileri de tutar?',
      },
      code: 'SELECT s.name, e.course_code\nFROM Student s ??? Enrollment e\nON s.id = e.student_id;',
      options: { fr: ['INNER JOIN', 'LEFT JOIN', 'Aucune'], en: ['INNER JOIN', 'LEFT JOIN', 'Neither'], tr: ['INNER JOIN', 'LEFT JOIN', 'Hiçbiri'] },
      answerIndex: 1,
      explanation: {
        fr: 'LEFT JOIN garde toutes les lignes de Student (à gauche) ; pour Can, course_code vaut NULL. INNER JOIN l’éliminerait.',
        en: 'LEFT JOIN keeps every Student row (on the left); for Can, course_code is NULL. INNER JOIN would drop him.',
        tr: 'LEFT JOIN, Student’ın (solda) tüm satırlarını tutar; Can için course_code NULL olur. INNER JOIN onu elerdi.',
      },
    },
  },
  {
    id: 'db-w09-subqueries',
    week: 9,
    title: {
      fr: 'Sous-requêtes et opérations ensemblistes',
      en: 'Subqueries and set operations',
      tr: 'Alt sorgular ve küme işlemleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une sous-requête est un SELECT placé dans une autre requête. Elle peut renvoyer une valeur (comparée avec =, >), une liste (avec IN, NOT IN) ou servir de test (EXISTS). Une sous-requête corrélée utilise une colonne de la requête externe et est recalculée pour chaque ligne. UNION, INTERSECT et EXCEPT combinent les résultats de deux requêtes ayant les mêmes colonnes ; UNION supprime les doublons, UNION ALL les garde.',
          en: 'A subquery is a SELECT inside another query. It can return one value (compared with =, >), a list (with IN, NOT IN) or act as a test (EXISTS). A correlated subquery uses a column from the outer query and is recomputed for every row. UNION, INTERSECT and EXCEPT combine the results of two queries with the same columns; UNION removes duplicates, UNION ALL keeps them.',
          tr: 'Alt sorgu başka bir sorgunun içindeki SELECT’tir. Tek bir değer (=, > ile karşılaştırılır), bir liste (IN, NOT IN ile) döndürebilir veya bir sınama (EXISTS) olarak kullanılabilir. İlişkili alt sorgu dış sorgudan bir sütun kullanır ve her satır için yeniden hesaplanır. UNION, INTERSECT ve EXCEPT aynı sütunlara sahip iki sorgunun sonuçlarını birleştirir; UNION tekrarları kaldırır, UNION ALL tutar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '-- Notes au-dessus de la moyenne générale (72.5)\nSELECT s.name, e.course_code, e.grade\nFROM Student s JOIN Enrollment e ON s.id = e.student_id\nWHERE e.grade > (SELECT AVG(grade) FROM Enrollment);\n\n-- Étudiants qui ne suivent pas CME226\nSELECT name FROM Student\nWHERE id NOT IN (SELECT student_id FROM Enrollment WHERE course_code = \'CME226\');\n\n-- Corrélée : étudiants ayant au moins une note < 60\nSELECT name FROM Student s\nWHERE EXISTS (SELECT 1 FROM Enrollment e\n              WHERE e.student_id = s.id AND e.grade < 60);   -- Emre\n\nSELECT city FROM Student WHERE year = 1\nUNION\nSELECT city FROM Student WHERE year = 3;                     -- Ankara, Karabuk',
          en: '-- Grades above the overall average (72.5)\nSELECT s.name, e.course_code, e.grade\nFROM Student s JOIN Enrollment e ON s.id = e.student_id\nWHERE e.grade > (SELECT AVG(grade) FROM Enrollment);\n\n-- Students not taking CME226\nSELECT name FROM Student\nWHERE id NOT IN (SELECT student_id FROM Enrollment WHERE course_code = \'CME226\');\n\n-- Correlated: students with at least one grade < 60\nSELECT name FROM Student s\nWHERE EXISTS (SELECT 1 FROM Enrollment e\n              WHERE e.student_id = s.id AND e.grade < 60);   -- Emre\n\nSELECT city FROM Student WHERE year = 1\nUNION\nSELECT city FROM Student WHERE year = 3;                     -- Ankara, Karabuk',
          tr: '-- Genel ortalamanın (72.5) üstündeki notlar\nSELECT s.name, e.course_code, e.grade\nFROM Student s JOIN Enrollment e ON s.id = e.student_id\nWHERE e.grade > (SELECT AVG(grade) FROM Enrollment);\n\n-- CME226 almayan öğrenciler\nSELECT name FROM Student\nWHERE id NOT IN (SELECT student_id FROM Enrollment WHERE course_code = \'CME226\');\n\n-- İlişkili: en az bir notu < 60 olan öğrenciler\nSELECT name FROM Student s\nWHERE EXISTS (SELECT 1 FROM Enrollment e\n              WHERE e.student_id = s.id AND e.grade < 60);   -- Emre\n\nSELECT city FROM Student WHERE year = 1\nUNION\nSELECT city FROM Student WHERE year = 3;                     -- Ankara, Karabuk',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Donne le résultat des deux premières requêtes ci-dessus. Pour la première, vérifie la moyenne 72.5 à partir des 6 notes.',
          en: 'Give the result of the first two queries above. For the first, check the 72.5 average from the 6 grades.',
          tr: 'Yukarıdaki ilk iki sorgunun sonucunu ver. İlki için 72.5 ortalamasını 6 nottan doğrula.',
        },
        solution: {
          fr: 'Moyenne : (85 + 70 + 90 + 55 + 75 + 60) / 6 = 435 / 6 = 72.5. Notes supérieures : Ayse CME226 90, Ali CME225 85, Emre BLM221 75. Deuxième requête : CME226 est suivi par Ali (1), Ayse (2) et Zeynep (4). Les autres sont Emre et Can. Attention : si la sous-requête de NOT IN contient un NULL, le résultat devient vide ; NOT EXISTS n’a pas ce piège.',
          en: 'Average: (85 + 70 + 90 + 55 + 75 + 60) / 6 = 435 / 6 = 72.5. Higher grades: Ayse CME226 90, Ali CME225 85, Emre BLM221 75. Second query: CME226 is taken by Ali (1), Ayse (2) and Zeynep (4). The others are Emre and Can. Careful: if the NOT IN subquery contains a NULL, the result becomes empty; NOT EXISTS has no such trap.',
          tr: 'Ortalama: (85 + 70 + 90 + 55 + 75 + 60) / 6 = 435 / 6 = 72.5. Daha yüksek notlar: Ayşe CME226 90, Ali CME225 85, Emre BLM221 75. İkinci sorgu: CME226’yı Ali (1), Ayşe (2) ve Zeynep (4) alıyor. Diğerleri Emre ve Can’dir. Dikkat: NOT IN alt sorgusu bir NULL içerirse sonuç boş olur; NOT EXISTS’te bu tuzak yoktur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la différence entre UNION et UNION ALL ?',
        en: 'What is the difference between UNION and UNION ALL?',
        tr: 'UNION ile UNION ALL arasındaki fark nedir?',
      },
      options: {
        fr: ['UNION supprime les doublons, UNION ALL les garde', 'UNION ALL supprime les doublons', 'Aucune'],
        en: ['UNION removes duplicates, UNION ALL keeps them', 'UNION ALL removes duplicates', 'None'],
        tr: ['UNION tekrarları kaldırır, UNION ALL tutar', 'UNION ALL tekrarları kaldırır', 'Fark yoktur'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'UNION applique un DISTINCT au résultat. UNION ALL est plus rapide car il n’a pas besoin de chercher les doublons.',
        en: 'UNION applies a DISTINCT to the result. UNION ALL is faster since it doesn’t need to look for duplicates.',
        tr: 'UNION sonuca DISTINCT uygular. UNION ALL tekrar aramak zorunda olmadığı için daha hızlıdır.',
      },
    },
  },
  {
    id: 'db-w10-dml-views',
    week: 10,
    title: {
      fr: 'Modifier les données : INSERT, UPDATE, DELETE et les vues',
      en: 'Changing data: INSERT, UPDATE, DELETE and views',
      tr: 'Veri değiştirme: INSERT, UPDATE, DELETE ve görünümler',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'INSERT INTO Student (id, name, city, year) VALUES (6, \'Deniz\', \'Bursa\', 1);\n\nUPDATE Enrollment\nSET grade = grade + 5\nWHERE course_code = \'CME226\' AND grade < 75;   -- sans WHERE : TOUTES les lignes !\n\nDELETE FROM Enrollment WHERE grade < 60;      -- sans WHERE : table vidée\n\n-- Une vue = une requête enregistrée, utilisée comme une table\nCREATE VIEW Honors AS\nSELECT s.name, e.course_code, e.grade\nFROM Student s JOIN Enrollment e ON s.id = e.student_id\nWHERE e.grade >= 80;\n\nSELECT * FROM Honors;     -- Ali CME225 85 | Ayse CME226 90',
          en: 'INSERT INTO Student (id, name, city, year) VALUES (6, \'Deniz\', \'Bursa\', 1);\n\nUPDATE Enrollment\nSET grade = grade + 5\nWHERE course_code = \'CME226\' AND grade < 75;   -- no WHERE: EVERY row!\n\nDELETE FROM Enrollment WHERE grade < 60;      -- no WHERE: table emptied\n\n-- A view = a saved query, used like a table\nCREATE VIEW Honors AS\nSELECT s.name, e.course_code, e.grade\nFROM Student s JOIN Enrollment e ON s.id = e.student_id\nWHERE e.grade >= 80;\n\nSELECT * FROM Honors;     -- Ali CME225 85 | Ayse CME226 90',
          tr: 'INSERT INTO Student (id, name, city, year) VALUES (6, \'Deniz\', \'Bursa\', 1);\n\nUPDATE Enrollment\nSET grade = grade + 5\nWHERE course_code = \'CME226\' AND grade < 75;   -- WHERE yoksa: TÜM satırlar!\n\nDELETE FROM Enrollment WHERE grade < 60;      -- WHERE yoksa: tablo boşalır\n\n-- Görünüm = kaydedilmiş bir sorgu, tablo gibi kullanılır\nCREATE VIEW Honors AS\nSELECT s.name, e.course_code, e.grade\nFROM Student s JOIN Enrollment e ON s.id = e.student_id\nWHERE e.grade >= 80;\n\nSELECT * FROM Honors;     -- Ali CME225 85 | Ayse CME226 90',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Une vue ne stocke pas de données : elle est recalculée à chaque utilisation, donc toujours à jour. Elle simplifie les requêtes compliquées et sert à la sécurité : on donne accès à la vue (certaines colonnes, certaines lignes) sans donner accès aux tables.',
          en: 'A view stores no data: it is recomputed every time it is used, so it is always up to date. It simplifies complex queries and helps security: access is granted to the view (some columns, some rows) without granting access to the tables.',
          tr: 'Görünüm veri saklamaz: her kullanımda yeniden hesaplanır, bu yüzden hep günceldir. Karmaşık sorguları basitleştirir ve güvenliğe yardımcı olur: tablolara erişim vermeden görünüme (bazı sütunlar, bazı satırlar) erişim verilir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On exécute, dans l’ordre, l’UPDATE puis le DELETE ci-dessus sur les données de départ. (1) Quelles notes de CME226 changent ? (2) Combien reste-t-il de lignes dans Enrollment ? (3) La vue Honors change-t-elle ?',
          en: 'Run, in order, the UPDATE then the DELETE above on the starting data. (1) Which CME226 grades change? (2) How many rows remain in Enrollment? (3) Does the Honors view change?',
          tr: 'Yukarıdaki UPDATE ve sonra DELETE başlangıç verileri üzerinde sırayla çalıştırılıyor. (1) Hangi CME226 notları değişir? (2) Enrollment’ta kaç satır kalır? (3) Honors görünümü değişir mi?',
        },
        solution: {
          fr: '(1) Ali 70 → 75 et Zeynep 60 → 65 ; Ayse (90) n’est pas concernée car 90 ≥ 75. (2) Après l’UPDATE, une seule note est < 60 : Emre CME225 55. Le DELETE enlève cette ligne, il en reste 5. (3) Non : aucune note ne passe le seuil de 80, et la ligne supprimée (55) n’y figurait pas. Honors reste Ali CME225 85 et Ayse CME226 90.',
          en: '(1) Ali 70 → 75 and Zeynep 60 → 65; Ayse (90) is not affected since 90 ≥ 75. (2) After the UPDATE, only one grade is < 60: Emre CME225 55. The DELETE removes that row, 5 remain. (3) No: no grade crosses the 80 threshold, and the deleted row (55) wasn’t in it. Honors stays Ali CME225 85 and Ayse CME226 90.',
          tr: '(1) Ali 70 → 75 ve Zeynep 60 → 65; Ayşe (90) etkilenmez çünkü 90 ≥ 75. (2) UPDATE’ten sonra yalnızca bir not < 60’tır: Emre CME225 55. DELETE bu satırı siler, 5 satır kalır. (3) Hayır: hiçbir not 80 eşiğini geçmez ve silinen satır (55) görünümde değildi. Honors, Ali CME225 85 ve Ayşe CME226 90 olarak kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait DELETE FROM Enrollment; sans WHERE ?',
        en: 'What does DELETE FROM Enrollment; without WHERE do?',
        tr: 'WHERE olmadan DELETE FROM Enrollment; ne yapar?',
      },
      options: {
        fr: ['Rien, il manque une condition', 'Il supprime toutes les lignes mais garde la table', 'Il supprime la table'],
        en: ['Nothing, a condition is missing', 'It deletes every row but keeps the table', 'It drops the table'],
        tr: ['Hiçbir şey, koşul eksik', 'Tüm satırları siler ama tabloyu tutar', 'Tabloyu siler'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Sans WHERE, la condition est vraie pour toutes les lignes : la table devient vide mais existe toujours. DROP TABLE supprimerait aussi la structure.',
        en: 'Without WHERE, the condition holds for every row: the table becomes empty but still exists. DROP TABLE would also remove the structure.',
        tr: 'WHERE yoksa koşul tüm satırlar için doğrudur: tablo boşalır ama var olmaya devam eder. DROP TABLE yapıyı da silerdi.',
      },
    },
  },
  {
    id: 'db-w11-relational-algebra',
    week: 11,
    title: { fr: 'L’algèbre relationnelle', en: 'Relational algebra', tr: 'İlişkisel cebir' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’algèbre relationnelle est le langage mathématique derrière SQL : chaque opérateur prend des relations et renvoie une relation. Le SGBD traduit une requête SQL en une expression d’algèbre relationnelle, puis cherche la façon la plus rapide de l’évaluer (optimisation).',
          en: 'Relational algebra is the mathematical language behind SQL: each operator takes relations and returns a relation. The DBMS translates a SQL query into a relational algebra expression, then looks for the fastest way to evaluate it (optimization).',
          tr: 'İlişkisel cebir SQL’in arkasındaki matematiksel dildir: her işleç ilişkiler alır ve bir ilişki döndürür. VTYS bir SQL sorgusunu ilişkisel cebir ifadesine çevirir, sonra onu değerlendirmenin en hızlı yolunu arar (optimizasyon).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'σ  sélection (lignes)       σ year=2 (Student)        ↔ WHERE year = 2\nπ  projection (colonnes)    π name,city (Student)     ↔ SELECT DISTINCT name, city\n×  produit cartésien        Student × Course          ↔ FROM Student, Course\n⋈  jointure                 Student ⋈ id=student_id Enrollment\n∪  union    ∩  intersection    −  différence\nρ  renommage\n\nExemple : noms des étudiants ayant plus de 80\nπ name ( σ grade>80 ( Student ⋈ id=student_id Enrollment ) )',
          en: 'σ  selection (rows)         σ year=2 (Student)        ↔ WHERE year = 2\nπ  projection (columns)     π name,city (Student)     ↔ SELECT DISTINCT name, city\n×  Cartesian product        Student × Course          ↔ FROM Student, Course\n⋈  join                     Student ⋈ id=student_id Enrollment\n∪  union    ∩  intersection    −  difference\nρ  rename\n\nExample: names of students with more than 80\nπ name ( σ grade>80 ( Student ⋈ id=student_id Enrollment ) )',
          tr: 'σ  seçme (satırlar)         σ year=2 (Student)        ↔ WHERE year = 2\nπ  izdüşüm (sütunlar)       π name,city (Student)     ↔ SELECT DISTINCT name, city\n×  Kartezyen çarpım         Student × Course          ↔ FROM Student, Course\n⋈  birleştirme              Student ⋈ id=student_id Enrollment\n∪  birleşim    ∩  kesişim    −  fark\nρ  yeniden adlandırma\n\nÖrnek: 80’den yüksek notu olan öğrencilerin adları\nπ name ( σ grade>80 ( Student ⋈ id=student_id Enrollment ) )',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Que donne π city (σ year=2 (Student)) ? (2) Écris en algèbre relationnelle les identifiants des étudiants qui n’ont aucune inscription, puis donne le résultat.',
          en: '(1) What does π city (σ year=2 (Student)) give? (2) Write in relational algebra the ids of students with no enrollment, then give the result.',
          tr: '(1) π city (σ year=2 (Student)) ne verir? (2) Hiç kaydı olmayan öğrencilerin numaralarını ilişkisel cebirle yaz, sonra sonucu ver.',
        },
        solution: {
          fr: '(1) σ garde Ali et Zeynep (année 2), π garde leur ville : {Karabuk, Istanbul}. (2) Différence : π id (Student) − ρ id←student_id (π student_id (Enrollment)) = {1, 2, 3, 4, 5} − {1, 2, 3, 4} = {5}, c’est-à-dire Can. Le renommage ρ rend les deux relations compatibles (même nom de colonne).',
          en: '(1) σ keeps Ali and Zeynep (year 2), π keeps their city: {Karabuk, Istanbul}. (2) Difference: π id (Student) − ρ id←student_id (π student_id (Enrollment)) = {1, 2, 3, 4, 5} − {1, 2, 3, 4} = {5}, that is Can. The rename ρ makes the two relations compatible (same column name).',
          tr: '(1) σ, Ali ve Zeynep’i (2. sınıf) tutar, π şehirlerini tutar: {Karabuk, Istanbul}. (2) Fark: π id (Student) − ρ id←student_id (π student_id (Enrollment)) = {1, 2, 3, 4, 5} − {1, 2, 3, 4} = {5}, yani Can. Yeniden adlandırma ρ, iki ilişkiyi uyumlu yapar (aynı sütun adı).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel opérateur correspond à la clause WHERE ?',
        en: 'Which operator matches the WHERE clause?',
        tr: 'Hangi işleç WHERE ifadesine karşılık gelir?',
      },
      options: { fr: ['π (projection)', 'σ (sélection)', '× (produit)'], en: ['π (projection)', 'σ (selection)', '× (product)'], tr: ['π (izdüşüm)', 'σ (seçme)', '× (çarpım)'] },
      answerIndex: 1,
      explanation: {
        fr: 'σ choisit des lignes selon une condition, comme WHERE. Attention au piège : π choisit des colonnes, comme la liste du SELECT.',
        en: 'σ picks rows by a condition, like WHERE. Mind the trap: π picks columns, like the SELECT list.',
        tr: 'σ bir koşula göre satır seçer, WHERE gibi. Tuzağa dikkat: π ise SELECT listesi gibi sütun seçer.',
      },
    },
  },
  {
    id: 'db-w12-normalization',
    week: 12,
    title: {
      fr: 'Dépendances fonctionnelles et normalisation',
      en: 'Functional dependencies and normalization',
      tr: 'Fonksiyonel bağımlılıklar ve normalizasyon',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une dépendance fonctionnelle X → Y signifie : deux lignes qui ont le même X ont forcément le même Y. La fermeture X⁺ est l’ensemble des attributs déterminés par X ; si X⁺ contient tous les attributs, X est une super-clé. La normalisation découpe une table pour supprimer la redondance et les anomalies vues en semaine 1.',
          en: 'A functional dependency X → Y means: two rows with the same X must have the same Y. The closure X⁺ is the set of attributes determined by X; if X⁺ holds every attribute, X is a superkey. Normalization splits a table to remove the redundancy and anomalies seen in week 1.',
          tr: 'X → Y fonksiyonel bağımlılığı şu demektir: aynı X’e sahip iki satırın Y’si de aynı olmak zorundadır. X⁺ kapanışı X’in belirlediği öznitelikler kümesidir; X⁺ tüm öznitelikleri içeriyorsa X bir süper anahtardır. Normalizasyon, 1. haftada görülen tekrarı ve anomalileri gidermek için bir tabloyu böler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '1NF : valeurs atomiques (pas de liste dans une case)\n2NF : 1NF + aucun attribut non-clé ne dépend d’une PARTIE de la clé\n3NF : 2NF + aucun attribut non-clé ne dépend d’un autre non-clé\n      (pas de dépendance transitive)\nBCNF: pour toute X → Y non triviale, X est une super-clé\n\nR(student_id, name, course_code, title, grade), clé (student_id, course_code)\nstudent_id → name           partielle → viole 2NF\ncourse_code → title         partielle → viole 2NF\n(student_id, course_code) → grade\nDécomposition : Student(student_id, name), Course(course_code, title),\n                Enrollment(student_id, course_code, grade)   → 3NF',
          en: '1NF : atomic values (no list in a cell)\n2NF : 1NF + no non-key attribute depends on PART of the key\n3NF : 2NF + no non-key attribute depends on another non-key one\n      (no transitive dependency)\nBCNF: for every non-trivial X → Y, X is a superkey\n\nR(student_id, name, course_code, title, grade), key (student_id, course_code)\nstudent_id → name           partial → violates 2NF\ncourse_code → title         partial → violates 2NF\n(student_id, course_code) → grade\nDecomposition: Student(student_id, name), Course(course_code, title),\n               Enrollment(student_id, course_code, grade)   → 3NF',
          tr: '1NF : atomik değerler (bir hücrede liste yok)\n2NF : 1NF + anahtar olmayan hiçbir öznitelik anahtarın bir PARÇASINA bağlı değil\n3NF : 2NF + anahtar olmayan hiçbir öznitelik başka bir anahtar olmayana bağlı değil\n      (geçişli bağımlılık yok)\nBCNF: önemsiz olmayan her X → Y için X bir süper anahtardır\n\nR(student_id, name, course_code, title, grade), anahtar (student_id, course_code)\nstudent_id → name           kısmi → 2NF’i bozar\ncourse_code → title         kısmi → 2NF’i bozar\n(student_id, course_code) → grade\nAyrıştırma: Student(student_id, name), Course(course_code, title),\n            Enrollment(student_id, course_code, grade)   → 3NF',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) R(A, B, C, D, E) avec F = {A → B, B → C, CD → E}. Calcule A⁺ et (AD)⁺. AD est-elle une clé ? (2) Employee(emp_id, name, dept_id, dept_name) avec emp_id → name, dept_id et dept_id → dept_name. En quelle forme normale est-elle, et comment la décomposer en 3NF ?',
          en: '(1) R(A, B, C, D, E) with F = {A → B, B → C, CD → E}. Compute A⁺ and (AD)⁺. Is AD a key? (2) Employee(emp_id, name, dept_id, dept_name) with emp_id → name, dept_id and dept_id → dept_name. Which normal form is it in, and how is it decomposed into 3NF?',
          tr: '(1) F = {A → B, B → C, CD → E} ile R(A, B, C, D, E). A⁺ ve (AD)⁺’yı hesapla. AD bir anahtar mıdır? (2) emp_id → name, dept_id ve dept_id → dept_name ile Employee(emp_id, name, dept_id, dept_name). Hangi normal biçimdedir, 3NF’e nasıl ayrıştırılır?',
        },
        solution: {
          fr: '(1) A⁺ : A → B, puis B → C, donc {A, B, C} ; on n’a pas D, donc pas E. (AD)⁺ : {A, D} + B + C, puis CD → E : {A, B, C, D, E}, tous les attributs. AD est une super-clé, et minimale (A⁺ et D⁺ = {D} ne suffisent pas) : c’est une clé candidate. (2) La clé est emp_id, une seule colonne : pas de dépendance partielle, donc 2NF. Mais emp_id → dept_id → dept_name est transitive : pas 3NF. Décomposition : Employee(emp_id, name, dept_id) et Department(dept_id, dept_name).',
          en: '(1) A⁺: A → B, then B → C, so {A, B, C}; D is missing, so no E. (AD)⁺: {A, D} + B + C, then CD → E: {A, B, C, D, E}, every attribute. AD is a superkey, and minimal (A⁺ and D⁺ = {D} aren’t enough): it is a candidate key. (2) The key is emp_id, a single column: no partial dependency, so 2NF. But emp_id → dept_id → dept_name is transitive: not 3NF. Decomposition: Employee(emp_id, name, dept_id) and Department(dept_id, dept_name).',
          tr: '(1) A⁺: A → B, sonra B → C, yani {A, B, C}; D yok, yani E de yok. (AD)⁺: {A, D} + B + C, sonra CD → E: {A, B, C, D, E}, tüm öznitelikler. AD bir süper anahtardır ve en küçüktür (A⁺ ve D⁺ = {D} yetmez): aday anahtardır. (2) Anahtar tek sütunlu emp_id’dir: kısmi bağımlılık yok, yani 2NF. Ama emp_id → dept_id → dept_name geçişlidir: 3NF değil. Ayrıştırma: Employee(emp_id, name, dept_id) ve Department(dept_id, dept_name).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Une table dont la clé primaire n’a qu’une seule colonne et qui est en 1NF est forcément…',
        en: 'A 1NF table whose primary key has a single column is necessarily…',
        tr: 'Birincil anahtarı tek sütunlu olan 1NF bir tablo kesinlikle…',
      },
      options: { fr: ['en 2NF', 'en 3NF', 'en BCNF'], en: ['in 2NF', 'in 3NF', 'in BCNF'], tr: ['2NF’tedir', '3NF’tedir', 'BCNF’tedir'] },
      answerIndex: 0,
      explanation: {
        fr: 'Une dépendance partielle a besoin d’une clé composée de plusieurs colonnes. Avec une clé d’une seule colonne, elle est impossible, mais une dépendance transitive reste possible : 3NF n’est pas garantie.',
        en: 'A partial dependency needs a key made of several columns. With a one-column key it is impossible, but a transitive dependency is still possible: 3NF isn’t guaranteed.',
        tr: 'Kısmi bağımlılık birden fazla sütundan oluşan bir anahtar gerektirir. Tek sütunlu anahtarla imkânsızdır, ama geçişli bağımlılık yine olabilir: 3NF garanti değildir.',
      },
    },
  },
  {
    id: 'db-w13-transactions',
    week: 13,
    title: {
      fr: 'Transactions et contrôle de la concurrence',
      en: 'Transactions and concurrency control',
      tr: 'İşlemler (transaction) ve eşzamanlılık denetimi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une transaction est une suite d’opérations qui forme un tout : soit tout réussit (COMMIT), soit tout est annulé (ROLLBACK). Propriétés ACID : Atomicité (tout ou rien), Cohérence (les contraintes restent vraies), Isolation (les transactions simultanées ne se gênent pas), Durabilité (un COMMIT survit à une panne). Le SGBD isole les transactions avec des verrous, par exemple le verrouillage à deux phases (2PL).',
          en: 'A transaction is a sequence of operations forming one unit: either everything succeeds (COMMIT) or everything is undone (ROLLBACK). ACID properties: Atomicity (all or nothing), Consistency (constraints stay true), Isolation (concurrent transactions don’t interfere), Durability (a COMMIT survives a crash). The DBMS isolates transactions with locks, for example two-phase locking (2PL).',
          tr: 'İşlem (transaction), bir bütün oluşturan işlemler dizisidir: ya hepsi başarılı olur (COMMIT) ya da hepsi geri alınır (ROLLBACK). ACID özellikleri: Bölünmezlik (ya hep ya hiç), Tutarlılık (kısıtlar doğru kalır), Yalıtım (eşzamanlı işlemler birbirini etkilemez), Kalıcılık (COMMIT bir çökmeden sonra da kalır). VTYS işlemleri kilitlerle yalıtır, örneğin iki aşamalı kilitleme (2PL).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'BEGIN;\nUPDATE Account SET balance = balance - 200 WHERE id = 1;\nUPDATE Account SET balance = balance + 200 WHERE id = 2;\nCOMMIT;          -- ou ROLLBACK si une étape échoue\n\nProblèmes sans isolation\n• mise à jour perdue : deux écritures, l’une écrase l’autre\n• lecture sale : lire une valeur non encore validée\n• lecture non répétable : relire et trouver une autre valeur\n\n2PL : phase de croissance (on prend des verrous), puis phase de\ndécroissance (on les rend) ; on ne reprend plus de verrou après\nen avoir rendu un. Risque : interblocage (deadlock).',
          en: 'BEGIN;\nUPDATE Account SET balance = balance - 200 WHERE id = 1;\nUPDATE Account SET balance = balance + 200 WHERE id = 2;\nCOMMIT;          -- or ROLLBACK if a step fails\n\nProblems without isolation\n• lost update: two writes, one overwrites the other\n• dirty read: reading a value not yet committed\n• non-repeatable read: reading again and finding another value\n\n2PL: growing phase (locks are taken), then shrinking phase\n(locks are released); no lock is taken after one has been\nreleased. Risk: deadlock.',
          tr: 'BEGIN;\nUPDATE Account SET balance = balance - 200 WHERE id = 1;\nUPDATE Account SET balance = balance + 200 WHERE id = 2;\nCOMMIT;          -- bir adım başarısız olursa ROLLBACK\n\nYalıtım olmadan sorunlar\n• kayıp güncelleme: iki yazma, biri diğerini ezer\n• kirli okuma: henüz onaylanmamış bir değeri okumak\n• tekrarlanamayan okuma: yeniden okuyunca başka değer bulmak\n\n2PL: büyüme aşaması (kilitler alınır), sonra küçülme aşaması\n(kilitler bırakılır); bir kilit bırakıldıktan sonra yeni kilit\nalınmaz. Risk: kilitlenme (deadlock).',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Le solde vaut 100. T1 retire 30 et T2 dépose 50, sans verrou, dans cet ordre : T1 lit 100, T2 lit 100, T1 écrit 100 − 30, T2 écrit 100 + 50. (1) Quel est le solde final, et quel devrait-il être ? (2) Comment l’éviter ? (3) Si T1 verrouille le compte A puis demande B, pendant que T2 verrouille B puis demande A, que se passe-t-il ?',
          en: 'The balance is 100. T1 withdraws 30 and T2 deposits 50, with no lock, in this order: T1 reads 100, T2 reads 100, T1 writes 100 − 30, T2 writes 100 + 50. (1) What is the final balance, and what should it be? (2) How is this avoided? (3) If T1 locks account A then asks for B, while T2 locks B then asks for A, what happens?',
          tr: 'Bakiye 100. T1 30 çekiyor ve T2 50 yatırıyor, kilit olmadan, bu sırayla: T1 100 okur, T2 100 okur, T1 100 − 30 yazar, T2 100 + 50 yazar. (1) Son bakiye nedir, ne olmalıydı? (2) Bu nasıl önlenir? (3) T1 A hesabını kilitleyip B’yi isterken T2 B’yi kilitleyip A’yı isterse ne olur?',
        },
        solution: {
          fr: '(1) T2 écrase l’écriture de T1 : solde final 150 au lieu de 100 − 30 + 50 = 120. C’est une mise à jour perdue. (2) Avec un verrou exclusif (2PL) : T2 doit attendre que T1 ait validé, puis lit 70 et écrit 120. On peut aussi écrire balance = balance + 50 dans un seul UPDATE. (3) Interblocage : chacune attend l’autre indéfiniment. Le SGBD le détecte (cycle dans le graphe d’attente) et annule (ROLLBACK) l’une des deux.',
          en: '(1) T2 overwrites T1’s write: final balance 150 instead of 100 − 30 + 50 = 120. That is a lost update. (2) With an exclusive lock (2PL): T2 must wait for T1 to commit, then reads 70 and writes 120. Writing balance = balance + 50 in a single UPDATE also works. (3) Deadlock: each one waits for the other forever. The DBMS detects it (cycle in the wait-for graph) and rolls back one of them.',
          tr: '(1) T2, T1’in yazdığını ezer: son bakiye 100 − 30 + 50 = 120 yerine 150. Bu bir kayıp güncellemedir. (2) Özel kilitle (2PL): T2, T1’in onaylamasını beklemek zorundadır, sonra 70 okur ve 120 yazar. Tek bir UPDATE’te balance = balance + 50 yazmak da işe yarar. (3) Kilitlenme: her biri diğerini sonsuza dek bekler. VTYS bunu (bekleme grafiğindeki döngü) algılar ve birini geri alır (ROLLBACK).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle propriété ACID garantit qu’un virement n’est jamais fait à moitié ?',
        en: 'Which ACID property guarantees a transfer is never half done?',
        tr: 'Hangi ACID özelliği bir havalenin asla yarım kalmamasını garanti eder?',
      },
      options: { fr: ['Atomicité', 'Isolation', 'Durabilité'], en: ['Atomicity', 'Isolation', 'Durability'], tr: ['Bölünmezlik', 'Yalıtım', 'Kalıcılık'] },
      answerIndex: 0,
      explanation: {
        fr: 'Atomicité : le débit et le crédit sont faits tous les deux ou aucun. Si une panne arrive entre les deux, la transaction est annulée.',
        en: 'Atomicity: the debit and the credit both happen or neither does. If a crash occurs in between, the transaction is undone.',
        tr: 'Bölünmezlik: borç ve alacak ya ikisi birden yapılır ya hiçbiri. Arada bir çökme olursa işlem geri alınır.',
      },
    },
  },
  {
    id: 'db-w14-indexes-triggers',
    week: 14,
    title: {
      fr: 'Index, procédures stockées, triggers et révision du final',
      en: 'Indexes, stored procedures, triggers and final review',
      tr: 'İndeksler, saklı yordamlar, tetikleyiciler ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un index (en général un arbre B+) permet de retrouver des lignes sans lire toute la table, comme l’index d’un livre. Il accélère WHERE, JOIN et ORDER BY sur la colonne indexée, mais ralentit INSERT, UPDATE et DELETE, car il faut aussi le mettre à jour. Une procédure stockée est un programme enregistré dans le SGBD. Un trigger s’exécute automatiquement lors d’un INSERT, UPDATE ou DELETE.',
          en: 'An index (usually a B+ tree) finds rows without reading the whole table, like a book’s index. It speeds up WHERE, JOIN and ORDER BY on the indexed column, but slows down INSERT, UPDATE and DELETE, since it must be updated too. A stored procedure is a program saved in the DBMS. A trigger runs automatically on an INSERT, UPDATE or DELETE.',
          tr: 'İndeks (genellikle bir B+ ağacı), bir kitabın dizini gibi, tüm tabloyu okumadan satırları bulur. İndeksli sütundaki WHERE, JOIN ve ORDER BY’ı hızlandırır, ama INSERT, UPDATE ve DELETE’i yavaşlatır, çünkü indeksin de güncellenmesi gerekir. Saklı yordam, VTYS’de kayıtlı bir programdır. Tetikleyici (trigger), bir INSERT, UPDATE veya DELETE sırasında otomatik çalışır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'CREATE INDEX idx_enroll_course ON Enrollment(course_code);\n\n-- Trigger (syntaxe MySQL) : journaliser chaque changement de note\nCREATE TRIGGER log_grade\nAFTER UPDATE ON Enrollment\nFOR EACH ROW\n  INSERT INTO GradeLog(student_id, old_grade, new_grade, changed_at)\n  VALUES (NEW.student_id, OLD.grade, NEW.grade, NOW());\n\n-- Procédure stockée\nCREATE PROCEDURE course_average(IN c CHAR(6))\n  SELECT AVG(grade) FROM Enrollment WHERE course_code = c;\nCALL course_average(\'CME226\');      -- 73.33',
          en: 'CREATE INDEX idx_enroll_course ON Enrollment(course_code);\n\n-- Trigger (MySQL syntax): log every grade change\nCREATE TRIGGER log_grade\nAFTER UPDATE ON Enrollment\nFOR EACH ROW\n  INSERT INTO GradeLog(student_id, old_grade, new_grade, changed_at)\n  VALUES (NEW.student_id, OLD.grade, NEW.grade, NOW());\n\n-- Stored procedure\nCREATE PROCEDURE course_average(IN c CHAR(6))\n  SELECT AVG(grade) FROM Enrollment WHERE course_code = c;\nCALL course_average(\'CME226\');      -- 73.33',
          tr: 'CREATE INDEX idx_enroll_course ON Enrollment(course_code);\n\n-- Tetikleyici (MySQL söz dizimi): her not değişikliğini kaydet\nCREATE TRIGGER log_grade\nAFTER UPDATE ON Enrollment\nFOR EACH ROW\n  INSERT INTO GradeLog(student_id, old_grade, new_grade, changed_at)\n  VALUES (NEW.student_id, OLD.grade, NEW.grade, NOW());\n\n-- Saklı yordam\nCREATE PROCEDURE course_average(IN c CHAR(6))\n  SELECT AVG(grade) FROM Enrollment WHERE course_code = c;\nCALL course_average(\'CME226\');      -- 73.33',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ INNER JOIN, LEFT JOIN, produit cartésien, COUNT(colonne) et NULL\n✔ Sous-requêtes : =, IN, NOT IN, EXISTS, corrélées ; UNION / INTERSECT / EXCEPT\n✔ INSERT, UPDATE, DELETE (attention au WHERE), vues\n✔ Algèbre relationnelle : σ, π, ×, ⋈, ∪, ∩, −, ρ\n✔ Dépendances fonctionnelles, fermeture X⁺, 1NF, 2NF, 3NF, BCNF\n✔ Transactions ACID, anomalies, 2PL, interblocage\n✔ Index (arbre B+), procédures stockées, triggers',
          en: '✔ INNER JOIN, LEFT JOIN, Cartesian product, COUNT(column) and NULL\n✔ Subqueries: =, IN, NOT IN, EXISTS, correlated; UNION / INTERSECT / EXCEPT\n✔ INSERT, UPDATE, DELETE (mind the WHERE), views\n✔ Relational algebra: σ, π, ×, ⋈, ∪, ∩, −, ρ\n✔ Functional dependencies, closure X⁺, 1NF, 2NF, 3NF, BCNF\n✔ ACID transactions, anomalies, 2PL, deadlock\n✔ Indexes (B+ tree), stored procedures, triggers',
          tr: '✔ INNER JOIN, LEFT JOIN, Kartezyen çarpım, COUNT(sütun) ve NULL\n✔ Alt sorgular: =, IN, NOT IN, EXISTS, ilişkili; UNION / INTERSECT / EXCEPT\n✔ INSERT, UPDATE, DELETE (WHERE’e dikkat), görünümler\n✔ İlişkisel cebir: σ, π, ×, ⋈, ∪, ∩, −, ρ\n✔ Fonksiyonel bağımlılıklar, X⁺ kapanışı, 1NF, 2NF, 3NF, BCNF\n✔ ACID işlemleri, anomaliler, 2PL, kilitlenme\n✔ İndeksler (B+ ağacı), saklı yordamlar, tetikleyiciler',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une table a 1 000 000 de lignes. (1) Sans index, combien de lignes faut-il examiner au pire pour trouver un étudiant par son id ? (2) Avec un arbre B+ où chaque nœud a environ 100 enfants, combien de niveaux faut-il parcourir ? (3) Le trigger log_grade est actif : combien de lignes ajoute à GradeLog l’UPDATE de la semaine 10 ?',
          en: 'A table has 1,000,000 rows. (1) Without an index, how many rows must be checked in the worst case to find a student by id? (2) With a B+ tree where each node has about 100 children, how many levels must be walked? (3) The log_grade trigger is active: how many rows does the week 10 UPDATE add to GradeLog?',
          tr: 'Bir tabloda 1.000.000 satır var. (1) İndeks olmadan, bir öğrenciyi id’siyle bulmak için en kötü durumda kaç satıra bakılır? (2) Her düğümün yaklaşık 100 çocuğu olan bir B+ ağacıyla kaç seviye dolaşılır? (3) log_grade tetikleyicisi etkin: 10. haftadaki UPDATE, GradeLog’a kaç satır ekler?',
        },
        solution: {
          fr: '(1) 1 000 000 : il faut parcourir toute la table, O(n). (2) 100³ = 1 000 000 : environ 3 niveaux, donc 3 ou 4 lectures de pages au lieu d’un million. (3) L’UPDATE modifie 2 lignes (Ali 70 → 75, Zeynep 60 → 65), et le trigger est FOR EACH ROW : 2 lignes dans GradeLog.',
          en: '(1) 1,000,000: the whole table must be scanned, O(n). (2) 100³ = 1,000,000: about 3 levels, so 3 or 4 page reads instead of a million. (3) The UPDATE changes 2 rows (Ali 70 → 75, Zeynep 60 → 65), and the trigger is FOR EACH ROW: 2 rows in GradeLog.',
          tr: '(1) 1.000.000: tüm tablo taranmalıdır, O(n). (2) 100³ = 1.000.000: yaklaşık 3 seviye, yani bir milyon yerine 3 veya 4 sayfa okuma. (3) UPDATE 2 satırı değiştirir (Ali 70 → 75, Zeynep 60 → 65) ve tetikleyici FOR EACH ROW’dur: GradeLog’a 2 satır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est l’inconvénient d’ajouter beaucoup d’index sur une table ?',
        en: 'What is the downside of adding many indexes to a table?',
        tr: 'Bir tabloya çok sayıda indeks eklemenin dezavantajı nedir?',
      },
      options: {
        fr: ['Les SELECT deviennent plus lents', 'Les INSERT, UPDATE et DELETE deviennent plus lents', 'Les données deviennent incohérentes'],
        en: ['SELECTs get slower', 'INSERTs, UPDATEs and DELETEs get slower', 'The data becomes inconsistent'],
        tr: ['SELECT’ler yavaşlar', 'INSERT, UPDATE ve DELETE’ler yavaşlar', 'Veriler tutarsız olur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque modification doit aussi mettre à jour tous les index, qui prennent en plus de la place. On indexe donc les colonnes souvent utilisées dans WHERE et JOIN, pas toutes.',
        en: 'Every change must also update all the indexes, which take extra space too. So index the columns often used in WHERE and JOIN, not all of them.',
        tr: 'Her değişiklik tüm indeksleri de güncellemelidir; indeksler ayrıca yer kaplar. Bu yüzden hepsi değil, WHERE ve JOIN’de sık kullanılan sütunlar indekslenir.',
      },
    },
  },
];
