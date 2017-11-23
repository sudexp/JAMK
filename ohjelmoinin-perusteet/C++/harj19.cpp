/******************************************
Tehtävä: Harjoitus 21	 (Palautus vko 46)
Tekija: Sklyarov Dmitry

Kuvaus:
Tee ohjelma, joka toimii auton nopeusmittarina.
Periaate on seuraava : Näppäimistä toimii
nopeusanturina ja näyttä mittarin näyttänä.
Nopeusmittari laskee viiden viimeisen nopeuden
keskiarvon ja tulostaa sen nykyisenä nopeutena
näytälle.Negatiivinen nopeus lopettaa ohjelman.
Toiminta on siis seuraava :
Ohjelman kaynnistyksessa mittari näyttää nolla
0
0
0
0
0 (alkutila)nopeus = 0 km / h
Anna nopeus : 10
= > 2 km / h
Anna nopeus : 20
= > 6 km / h
Anna nopeus : 30
= > 12 km / h
Anna nopeus : 40
= > 20 km / h
Anna nopeus : 50
= > 30 km / h
Anna nopeus : 50
= > 38 km / h
Anna nopeus : 50
= > 44 km / h
Anna nopeus : 50
= > 48 km / h
Anna nopeus : 50
= > 50 km / h
Anna nopeus : 50
= > 50 km / h
Anna nopeus : -5
= > loppu

Käyttäjän syöte ohjelmalle lihavoitu ja kallistettu.

Toteuta kayttaen taulukkoa.

Pvm: 10.11.2017
Versio: 1.0
******************************************/

#include <iostream> 
// #include <cstring> 
using namespace std;
int main()
{
	short nopeus[5] = { 0,0,0,0,0 };
	int i = 0;
	while (true)
	{
		cout << "Anna nopeus: ";
		cin >> nopeus[i];
		if (nopeus[i] < 0)
			break;
		cout << (nopeus[0] + nopeus[1] + nopeus[2] + nopeus[3] + nopeus[4]) / 5;
		i++;
		if (i > 4)
			i = 0;
	}
	return 0;
}