#include <iostream> 
using namespace std;
int main()
{
	char nimi[32];
	cout << "Mikä sinun nimesi on? ";
	cin.get (nimi, 32);
	char osoite[64];
	cout << "Mikä sinun osoitteesi on? ";
	cin.get();
	cin.get (osoite, 64);
	int pituus;
	cout << "Kuinka pitkä olet? ";
	cin >> pituus;
	int paino;
	cout << "Kuinka paljon painaa? ";
	cin >> paino;
	int ihannepainos = pituus - 100;
	int erotus = paino - ihannepainos;
	
	cout << "Arvoisa " << nimi << endl;
	cout << "Osoitteesi on " << osoite << endl;
	cout << "Nykyinen pituutesi " << pituus << " cm" << endl;
	cout << "Nykyinen painosi " << paino << " kg" << endl;
	cout << "Ihannepainosi " << ihannepainos << " kg" << endl;
	cout << "Erotus " << erotus << " kg" << endl;
	return 0;
}