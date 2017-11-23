/******************************************
Tehtävä: Harjoitus 15 (Palautus vko 45)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka kysyy henkilötietosi seuraavasti:
Anna (kaikki) etunimesi (merkkijono):
Anna kengannumero (kokonaisluku):
Anna sukunimi (merkkijono):
Anna koulumatka (reaaliluku):
Anna osoitteesi:
Anna postinumero:

Ohjelma tulostaa tiedot seuraavasti:
sukunimi etunimet
osoite
postinumero
kengannumero ja koulumatka

Käytä C++:n cin- ja cout-olioita ohjelman toteuttamiseen.

Pvm: 06.10.2017
Versio: 1.0
******************************************/

#include <iostream> 
#include <cstring> 
using namespace std;
int main(void)
{
	char etunimi[30];
	char sukunimi[60];
	char osoite[40];
	int postinumero;
	int kengannumero;
	float koulumatka; 

	cout << "Syötä etunimesi: " << endl;
	cin.get(etunimi, 30);
	cout << "Syötä kengannumero: " << endl;
	cin >> kengannumero;
	cout << "Syötä sukunimesi: " << endl;
	cin.get();
	cin.get(sukunimi, 30);
	cout << "Syötä koulumatka: " << endl;
	cin >> koulumatka;
	cout << "Syötä osoite: " << endl;
	cin.get();
	cin.get(osoite, 40);
	cout << "Syötä postinumero: " << endl;
	cin >> postinumero;
	
	strcat(sukunimi, " ");
	strcat(sukunimi, etunimi);

	cout << sukunimi << endl;
	cout << osoite << endl;
	cout << postinumero << endl;
	cout << kengannumero << " " << koulumatka << endl;

	return 0;
}