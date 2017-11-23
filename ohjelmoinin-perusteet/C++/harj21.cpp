/******************************************
Teht‰v‰: Harjoitus 21	 (Palautus vko 46)
Tekija: Sklyarov Dmitry

Kuvaus:
Muunna harjoitus 11 niin, etta k‰yt‰t seuraavia aliohjelmia:

int KysyValinta(void);

-> KysyValinta paluttaa k‰ytt‰j‰n antaman valintanumeron (0-6)

double Summa(float luku1, int luku2);

-> Summa laskee yhteen annetut tiedot ja palauttaa summan p‰‰ohjelmaan

Pvm: 10.11.2017
Versio: 1.0
******************************************/

#include <iostream> 
using namespace std;
int KysyValinta(); // esitelly
double Summa(float luku1, int luku2); // esitelly

int KysyValinta() // m‰‰rittely
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

double Summa(float luku1, int luku2) // m‰‰rittely
{
	double summa=(luku1 + luku2);
	return summa;
}

/*
double Jakojaannos(float luku1, int luku2) // m‰‰rittely
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