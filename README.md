Projekt neve: Pomodoro-app
Fejlesztő: Hornyák Richárd
Email: hornyak.richard94@gmail.com
Telefon: +36 70 501 1020
Létrehozva: 2022.09.

Stack leírás:
	Az alkalmazás React.js keretrendszerben valósult meg.

Használt könyvtárak:
	- Middleware:
		- redux (redux, react-redux, @reduxjs/toolkit)
		- react-router-dom
	- CSS-framework:
		- bootstrap (bootstrap, react-bootstrap)

Leírás:
	A Pomodoro-app egy időmenedzsment eszköz, amely képes a weben keresztül minden platformon böngészőn keresztül megjelenni.
	A mentett adatok a használt eszköz memóriájában tárolódnak, backend bekötés szerverre nem megoldott. Így az adatok
	továbbítására másik eszközre nem alkalmas, a hálózati összeköttetés nem kivitelezett.
	
	A főoldalra érve tudunk bejelentkezni és regisztrálni. Az intrukciókat követve, saját adatainkat megadva és a felhasználói
	feltételt elfogadva lehetőségünk nyílik az alkalmazás használatára. A szolgáltatás képes kezelni célok meghatározását és
	olvasását. A kívánt célt kiválasztva hozzáadhatunk feladatokat a kívánt cél megvalósítása érdekében, mely feladatokon belül
	ciklusokat tudunk létrehozni. Egy adott ciklus előre meghatározott fókusz időből és szünetből áll. Ha egy ciklus kört
	elindítottunk, az időzítő elkezd számolni. Ezt szükség esetén meg is tudjuk állítani. Azonban, ha egy kört nem fejezünk be
	azt újból el kell kezdenünk.
	A főoldalon lehetőségünk van szöveg formázására. A kiválasztott tartalmak a megadott értékek szerint fognak változni.
	A főoldalról navigálva elérhetjük az összes mentett felhasználónkat. Azok adatait, céljait, feladatait, és köreit. Mindegyik
	almenüben kiolvasható az állapotokról tárolt információ. Lehetőségünk nyílik bejelentkezni egy-egy adott felhasználó fiókjába,
	illetve törölni azt.

Megjegyzés:
	Időhiány miatt az alábbi szolgáltatások nem lettek kivitelezve:
		- Felhasználó törlése esetén a felhasználó eszközén tárolt adatok nem törlődnek. Újboli regisztráció esetén a régi 
		  felhasználó adatai is betöltődnek;
		- A feladatok ideje nem állítódik át. Ezzel együtt a feladatok és célok elvégzése nem értékelődik ki, a végzés
		  dátuma nem frissül.
		- Egy adott kör, feladat, cél elvégzése esetén a felhasználónak nincsen visszajelzés, értesítés. Egyedül a kör
		  végzési dátuma frissül, ami így teljesítettnek nyilvánul, az idő nem indítható el rajta újra.