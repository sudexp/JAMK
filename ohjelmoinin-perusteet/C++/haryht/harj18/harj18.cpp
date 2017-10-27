/******************************************
Teht‰v‰: Harjoitus 18	 (Palautus vko 46)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka kysyy viiden koiran nimet ja i‰t.
Tiedot tallennetaan tietuetaulukkoon.
a) j‰rjest‰ tiedot ik‰ -kent‰n mukaan suuruusj‰rjestykseen
(pienimm‰st‰ suurimpaan). Ohjelma tulostaa lopuksi
jarjestetyn taulukon n‰yt‰lle.
b) j‰rjest‰ tiedot nimi -kent‰n mukaan aakkosj‰rjestyksess‰
Ohjelma tulostaa lopuksi jarjestetyn taulukon n‰ytolle.

Lajittelu tulee toteuttaa siten, ett‰ se toimisi samoin
my‰s 50 tai 5000 koiran tapauksssa.

Pvm: 27.10.2017
Versio: 1.0
******************************************/

#include <iostream> 
#include <cstring> 
using namespace std;
struct KOIRATIEDOT
{
	char nimi[20];
	int ika;
};

int main()
{
	const int MAX = 5; // koirien m‰‰r‰
	KOIRATIEDOT koira[MAX];
	int i, j;
	for (i = 0; i < MAX; i++)
	{
		cout << "Anna koiran nimi ja ika: " << endl;
		cin >> koira[i].nimi >> koira[i].ika;
	}
	for (int i = 0; i < MAX - 1; i++)
	{
		for (j = i + 1; j < MAX; j++)
		{
		/* Ik‰j‰rjestys	
		if (koira[i].ika > koira[j].ika)
			{
				KOIRATIEDOT tmp = koira[i];
				koira[i] = koira[j];
				koira[j] = tmp;
			} */
			if (strcmp(koira[i].nimi, koira[j].nimi) > 0) // Nimij‰rjestys - strcmp (p. 121-122)
			{
				KOIRATIEDOT tmp = koira[i];
				koira[i] = koira[j];
				koira[j] = tmp;
			}
		}
	}
	for (i = 0; i < MAX; i++)
	{
		cout << "Koiran nimi ja ika: " << endl;
		cout << koira[i].nimi << " " << koira[i].ika << endl;
	}
	return 0;
}