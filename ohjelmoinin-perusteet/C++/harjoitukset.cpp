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
#include <iostream> 
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
}