/******************************************
Teht�v�: Harjoitus 11 (Palautus vko 43)
Tekija: Sklyarov Dmitry
Kuvaus:
Muuta teht�v�n 9 laskin - ohjelmaa niin, etta valikko nayttaa
seuraavalta :

VALIKKO
0. Lopetus
1. Summa
2. Erotus
3. Tulo
4. Osamaara
5. Jakojaannos
6. Syota uudet luvut laskemista varten

Laskimella on siis mahdollista k�sitell�
useita lukupareja k�ytt�j�n toiveiden
mukaisesti.Mita tapahtuu, jos luku2 on 0 ?
HUOM!goto - lauseen k�ytt� on KIELLETTY!!!!

Pvm: 29.9.2017
Versio: 1.0
*****************************************/

#include <iostream> 
using namespace std;
int KysyValinta(); // esitelly
double Summa(float luku1, int luku2); // esitelly

int KysyValinta() // määrittely
{
	int valinta;
	cout << "0. Lopetus" << endl;
	cout << "1. Summa" << endl;
	cout << "2. Erotus" << endl;
	cout << "3. Tulo" << endl;
	cout << "4. Osamaara" << endl;
	cout << "5. Jakojaannos" << endl;
	cout << "6. Syota uudet luvut laskemista varten" << endl;
	cout << "Valitse numero 0, 1, 2, 3, 4, 5 tai 6" << endl;
	cin >> valinta;
	return valinta;
}

double Summa(float luku1, int luku2) // määrittely
{
	double summa = (luku1 + luku2);
	return summa;
}

/*
double Jakojaannos(float luku1, int luku2) // määrittely
{
double jakojaannos = (int) (luku1) % (luku2);
return jakojaannos;
}
*/
int main(void)
{
	int valinta, luku1, luku2;
	double summa;
	double jakojaannos;
	cout << "Anna kokonaisluku 1: " << endl;
	cin >> luku1;
	cout << "Anna kokonaisluku 2: " << endl;
	cin >> luku2;
	valinta = KysyValinta(); //kutsu
	switch (valinta)
	{
	case 0:
		return 0;
	case 1:
		summa = Summa(luku1, luku2); // kutsu
		cout << summa << endl;
		break;
		/*	case 5:
		jakojaannos = Jakojaannos(luku1, luku2);
		cout << jakojaannos << endl;
		break; */
	}
	return 0;
}