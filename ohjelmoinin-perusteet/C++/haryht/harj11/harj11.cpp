/******************************************
Tehtävä: Harjoitus 11 (Palautus vko 43)
Tekija: Sklyarov Dmitry
Kuvaus:
Muuta tehtävän 9 laskin - ohjelmaa niin, etta valikko nayttaa
seuraavalta :

VALIKKO
0. Lopetus
1. Summa
2. Erotus
3. Tulo
4. Osamaara
5. Jakojaannos
6. Syota uudet luvut laskemista varten

Laskimella on siis mahdollista käsitellä
useita lukupareja käyttäjän toiveiden
mukaisesti.Mita tapahtuu, jos luku2 on 0 ?
HUOM!goto - lauseen käyttä on KIELLETTY!!!!

Pvm: 29.9.2017
Versio: 1.0
*****************************************/

#include <iostream> 
using namespace std;
int main(void)
{
	int luku1;
	int luku2;

	int valinta = 1;
	int summa;
	int erotus;
	int tulo;
	float osamaara;
	float jakojaannos;

	cout << "Anna kokonaisluku 1" << endl;
	cin >> luku1;
	cout << "Anna kokonaisluku 2" << endl;
	cin >> luku2;

	while (valinta != 0) 
	{
		cout << "0. Lopetus" << endl;
		cout << "1. Summa" << endl;
		cout << "2. Erotus" << endl;
		cout << "3. Tulo" << endl;
		cout << "4. Osamaara" << endl;
		cout << "5. Jakojaannos" << endl;
		cout << "6. Syota uudet luvut laskemista varten" << endl;
		cout << "Valitse numero 0, 1, 2, 3, 4, 5 tai 6" << endl;

		summa = luku1 + luku2;
		erotus = luku1 - luku2;
		tulo = luku1 * luku2;

		cin >> valinta;

		if (valinta == 0)
		{
			cout << "The end" << endl;
		}

		if (valinta == 1)
		{
			cout << "Summa on: " << summa << endl;
		}

		if (valinta == 2)
		{
			cout << "Erotus on: " << erotus << endl;
		}

		if (valinta == 3)
		{
			cout << "Tulo on: " << tulo << endl;
		}

		if (valinta == 4)
		{
			if (luku2 != 0)
			{
				osamaara = (float)luku1 / luku2;
				cout << "Osamaara on: " << osamaara << endl;
			}
			else {
				cout << "Ei voida jakaa 0" << endl;
			}
		}

		if (valinta == 5)
		{
			if (luku2 != 0)
			{
				jakojaannos = luku1 % luku2;
				cout << "Jakojaannos on: " << jakojaannos << endl;
			}
			else {
				cout << "Ei voida jakaa 0" << endl;
			}
		}
		if (valinta == 6)
		{
			cout << "Anna kokonaisluku 1" << endl;
			cin >> luku1;
			cout << "Anna kokonaisluku 2" << endl;
			cin >> luku2;
		}
	}
}
