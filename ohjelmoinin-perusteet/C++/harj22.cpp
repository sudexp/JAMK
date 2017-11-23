/******************************************
Tehtävä: Harjoitus 22 (Palautus vko 49)
Tekija: Sklyarov Dmitry

Kuvaus:

Tee ohjelma, joka toimii henkilörekisterinä (max 10).
Ohjelma antaa käyttäjälle seuraavan valikon:

VALIKKO
0 Lopeta
1 Lisaa henkilo
2 Nayta kaikki henkilot

Tallenna henkilöiden tiedot tietuetaulukkoon.
Tallennettavia tietoja ovat
etunimi (merkkijono)
koulumatka (liukuluku)
hatun koko (kokonaisluku)

Toteuta ensin koko ohjelma pääohjelmana.

Tämän jälkeen lisää seuraavat aliohjelmat:
a) int Valikko(void);

b) void TulostaHenkilo(TIEDOT );
c) void TulostaKaikkiHenkilot(TIEDOT [], int lkm);
d) void LisaaHenkilo(TIEDOT [], int *lkm);

Pvm: 17.11.2017
Versio: 1.0
******************************************/

#include <iostream> 
using namespace std;
const int MAX = 10; // henkilöiden maksimimäärä

struct TIEDOT { // henkilön tiedot
	char nimi[30];
	int hatun_koko;
	float koulumatka;
};

int Valikko(void); // esittely
void TulostaHenkilo(TIEDOT x); // esittely
void TulostaKaikkiHankilot(TIEDOT henkilo[], int lkm); // esittely
void LisaaHenkilo(TIEDOT[], int *lkm); // esittely

void LisaaHenkilo(TIEDOT[], int *lkm)
{
	cout << "Anna " << hlo_laskuri + 1 << ". henkilon tiedot" << endl;
	cin >> henkilo[hlo_laskuri].nimi;
	cin >> henkilo[hlo_laskuri].hatun_koko;
	cin >> henkilo[hlo_laskuri].koulumatka;
	hlo_laskuri++;
}


void TulostaKaikkiHankilot(TIEDOT henkilo[], int lkm)
{
	for (int i = 0; i < lkm; i++)
	{
		//cout << henkilo[i].nimi << endl;
		//cout << henkilo[i].hatun_koko << endl;
		//cout << henkilo[i].koulumatka << endl;
		TulostaHenkilo(henkilo[i]);
	}
}

void TulostaHenkilo(TIEDOT x) // määrittely
{
	cout << x.nimi << x.koulumatka << x.hatun_koko << endl;
}

int Valikko(void) // määrittely
{
	int valinta;
	cout << "VALIKKO" << endl;
	cout << "0. Lopeta" << endl;
	cout << "1. Lisaa henkilo" << endl;
	cout << "2. Nayta kaikki henkilot" << endl;
	cout << "Anna valintasi: ";
	cin >> valinta;
	return valinta;
}

int main()
{
	TIEDOT henkilo[MAX]; // henkilöiden tiedot talletetaan taulukkoon
	int hlo_laskuri = 0; // henkilöiden lukumäärä
	int valinta;
	while(true)
	{
		valinta = Valikko(); // kutsu
		switch (valinta)
		{
		case 0:
			return 0;
		
		case 1: // lisää henkilön tiedot
		//	cout << "Anna " << hlo_laskuri + 1 << ". henkilon tiedot" << endl;
		//	cin >> henkilo[hlo_laskuri].nimi;
		//	cin >> henkilo[hlo_laskuri].hatun_koko;
		//	cin >> henkilo[hlo_laskuri].koulumatka;
		//	hlo_laskuri++;
			break;

		case 2: // lisää henkilön tiedot
			for (int i = 0; i < hlo_laskuri; i++)
			{
				//cout << henkilo[i].nimi << endl;
				//cout << henkilo[i].hatun_koko << endl;
				//cout << henkilo[i].koulumatka << endl;
				TulostaHenkilo(henkilo[i]);
			}
			break;
		}
	};
	return 0;
};
