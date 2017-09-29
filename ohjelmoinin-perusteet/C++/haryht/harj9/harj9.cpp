/******************************************
Tehtävä: Harjoitus 9 (palautus vko 41)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka toimii laskimena.
Käyttäjältä kysytään kaksi kokonaislukua,
jonka jälkeen ohjelma antaa valikon
laskutoimituksista. Valikko nayttaa
seuraavalta:
VALIKKO
1. Summa
2. Erotus
3. Tulo
4. Osamaara
5. Jakojaannos
Lopuksi ohjelma tulostaa valitun tuloksen naytölle.

Pvm: 22.9.2017
Versio: 1.0
*****************************************/

#include <iostream> 
using namespace std;
int main(void)
{
	int luku1;
	int luku2;

	int valinta;
	int summa;
	int erotus;
	int tulo;
	float osamaara;
	float jakojaannos;

	cout << "Anna kokonaisluku 1" << endl;
	cin >> luku1;
	cout << "Anna kokonaisluku 2" << endl;
	cin >> luku2;

	cout << "1. Summa" << endl;
	cout << "2. Erotus" << endl;
	cout << "3. Tulo" << endl;
	cout << "4. Osamaara" << endl;
	cout << "5. Jakojaannos" << endl;
	cout << "Valitse numero 1, 2, 3, 4 tai 5" << endl;

	summa = luku1 + luku2;
	erotus = luku1 - luku2;
	tulo = luku1 * luku2;
	osamaara = (float)luku1 / luku2;
	jakojaannos = luku1 % luku2;

	cin >> valinta;

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
		cout << "Osamaara on: " << osamaara << endl;
	}

	else
	{
		cout << "Jakojaannos on: " << jakojaannos << endl;
	}
	return 0;
}