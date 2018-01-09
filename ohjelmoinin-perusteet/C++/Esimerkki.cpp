// ESIMERKKI 5-1
/*
 #include <iostream>
 using namespace std;
 int main()
 {
 double luku = 32767000000;
 luku = luku + 1;
 cout << luku;
 return 0;
 }
 */

/* EIMERKKI 5-5
 #include <iostream>
 using namespace std;
 int main()
 {
 char merkki = 'a';
 cout << endl << "Merkki on nyt: "
 << merkki << (int)merkki;
 merkki = merkki + 1;
 cout << endl << "Merkki on nyt: "
 << merkki << (int)merkki;
 char nimi[8] = "Lauri";
 cout << endl << nimi << endl;
 cout << "Anna nimesi: ";
 cin >> nimi;
 cout << "Hei " << nimi << endl;
 return 0;
 } */

/* ESIMERKKI 6-17
 #include <iostream>
 using namespace std;
 int main()
 {
 int luku1 = 5, luku2 = 2;
 float summa, erotus, tulo, osamaara, jaannos;
 
 luku1 = liku1 + 1;
 luku1 += 1; // -= *= /= %=
 liku1++;
 ++luku1;
 
 summa = luku1 + luku2;
 erotus = luku1 - luku2;
 tulo = luku1 * luku2;
 osamaara = (float)luku1 / luku2;
 jaannos = luku1 % luku2;
 cout << "\nLuku1: " << luku1 << " Luku2: " << luku2;
 cout << "\nSumma: " << summa;
 cout << "\nErotus: " << erotus;
 cout << "\nTulo: " << tulo;
 cout << "\nOsamäärä: " << osamaara;
 cout << "\nJakojäännös: " << jaannos;
 return 0;
 } */

// ESIMERKKI 6-21
/*#include <iostream>
using namespace std;
int main()
{
    int luku1 = 5, luku2 = 5;
    cout << "\nluku1: " << luku1;
    cout << "\nluku1++: " << luku1++;
    cout << "\nluku1: " << luku1;
    cout << "\nluku2: " << luku2;
    cout << "\n--luku2: " << --luku2;
    cout << "\nluku2: " << luku2;
    return 0;
}*/
//  Esim.6-2
/*
#include <iostream> 
using namespace std;
int main(void)
{
	int luku = 5;
	int lukux;
	char merkki = 'a';
	float reaali = 5.5;
	float reaalix;
	lukux = merkki;
	cout << "\nchar -> int " << lukux;
	lukux = (int)reaali;
	cout << "\nfloat -> int " << lukux;
	reaalix = (float)luku;
	cout << "\nint -> float " << reaalix;
	reaalix = merkki;
	cout << "\nchar -> float " << reaalix;
	return 0;
}
*/

// Esim.6-4
/*#include <iostream> 
using namespace std;
#include <cstring> 
int main()
{
	char jono1[10] = "C-kieli";
	char jono2[10] = { 'C', '+', '+', '\0' };
	cout << "Alkuarvo jono1:ss„ on: " << jono1;
	strcpy_s(jono1, jono2);
	cout << "\nJa lopputulos on: " << jono1;
	return 0;
}*/

/* #include <iostream>
using namespace std;
int main()
{
	int ika=-100;
	char kokonimi[30];
	char osoite[30];
	
	
	while (ika < 0)
	{
		cout << "\nIk„? ";
		cin >> ika;
		if (ika < 0)
		{
			cout << "Anna ik„ positiivisena" << endl;
			cout << "Kiitos!" << endl;
		}
		else
		{
			cout << "Hyvin tehty!" << endl;
		}
	}
	
	cout << "Nimi? ";
	cin.get(); // lukee yhden merkin n„pp„in puskurista
	cin.get(kokonimi, 30);
	cout << "Osoite? ";
	cin.get();
	cin.get(osoite, 30);
	cout << "\nIk„ : " << ika;
	cout << "\nNimi: " << kokonimi;
	cout << "\nOsoite: " << osoite;
	return 0;
}
*/

// Esimerkkki 7-10
/*
 #include <iostream>
 using namespace std;
 #include <cstring>
 int main()
 {
 char jono1[10] = "alku";
 char jono2[15] = "loppu";
 int tulos;
 tulos = strcmp(jono1, jono2); //strcmpi - bez ucheta registra
 if (tulos < 0)
 cout << jono1 << " oli enimmäinen";
 else
 cout << jono2 << " oli ensimmäinen";
 return 0;
 }
 */

/*
 // Esimerkkki 7-13
 
 #include <iostream>
 using namespace std;
 int main()
 {
 int kerrat = 4;
 int lkm = 0;
 do
 {
 cout << "\nTerve";
 lkm++;
 } while (lkm < kerrat);
 return 0;
 }
 
 
 do
 {
 cout << "\nTerve";
 lkm++;
 if (lkm == kerrat)
 break;
 } while (true);
 
 */

// Esimerkkki 7-14

/*#include <iostream>
using namespace std;
int main()
{
    int kerrat = 4;
    int lkm;
    for (lkm = 0; lkm < kerrat; lkm++)
        // {
        cout << "\nTerve";
    // }
    return 0;
}
// for (;;)
/*
 lkm = 0
 while (lkm < kerrat)
 {
 cout << "\nTerve";
 lkm++;
 }
 */

// Esimerkkki 7-16

/*#include <iostream>
using namespace std;
int main()
{
    char merkki;
    int lkm = 0;
    cout << "Kirjoita lause (keskeytys CTRL-C): ";
    while (cin.get(merkki))
    {
        if (merkki == '.')
            break;
        if (merkki == ' ')
            continue;
        lkm++;
    }
    cout << "\nLauseessa oli yhteensä " << lkm << " kirjainta";
    return 0;
}*/
/* Esimerkkki 10-27
#include <iostream>
using namespace std;
int luku = 3; // globaali (julkinen) muuttuja
void Aliohjelma(void); // aliohjalman esittely
int main()
{
    Aliohjelma();
    cout<<"\nLuku on pŠŠohjelmassa: "<<luku;
    return 0;
}
void Aliohjelma(void)
{
    int luku = 5; // paikallinen muuttuja
    cout<<"\nAliohjelman luku on: "<<luku;
    cout<<"\nGlobaali luku on: "<<::luku;
}
 */
