/******************************************
Teht�v�: Harjoitus 10 (palautus vko 41)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka laskee sy�tetyist� kokonaisluvuista sek� positiivisten
ett� negatiivisten kokonaislukujen osuuden. Lukujen sy�tt� lopetetaan
sy�tt�m�ll� luku 0.

Tulostus:
Sy�tit kokonaislukuja seuraavasti:
----------------------------------
Negatiiviset 7 kpl 70.00%
Positiiviset 3 kpl 30.00%
Yhteens� 10 kpl 100.00%

Pvm: 29.9.2017
Versio: 1.0
*****************************************/

#include <iostream> 
using namespace std;
int main(void)
{
	int luku;
	int pos;
	int neg;
	float summa;
	float poss;
	float negg;
	float summaa; /* int summaa = 100; - toinen vaihtoehto, koska se on aina 100% */

	luku = 1;
	pos = 0;
	neg = 0;

	while (luku !=0) {
		cout << "Anna kokonaisluku:" << endl;
		cin >> luku;
		if (luku > 0)
			++pos;
		else if (luku < 0)
			++neg;
	}
	summa = pos + neg;
	poss = (pos / summa) * 100;
	negg = (neg / summa) * 100;
	summaa = (summa / summa) * 100;
	cout << "Positiiviset: " << pos << " kpl " << poss << " %" << endl;
	cout << "Negatiiviset: " << neg << " kpl " << negg << " %" << endl;
	cout << "Yhteens�: " << summa << " kpl " << summaa << " %" << endl;
	return 0;
}
