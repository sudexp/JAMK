/******************************************
Tehtävä: Harjoitus 16 (Palautus vko 45)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka kysyy henkilotietosi ja tallentaa ne tietueeseen.
Tietueeseen talletetaan seuraavat tiedot:
etunimi (merkkijono; C:n merkkitaulukko)
sukunimi (merkkijono; C:n merkkitaulukko)
koulumatka (reaaliluku)
osoite (merkkijono; C:n merkkitaulukko)
postinumero (merkkijono; C:n merkkitaulukko)
kengannumero (kokonaisluku)

Ohjelma tulostaa lopuksi tietueen tiedot naytölle.

Pvm: 13.10.2017
Versio: 1.0
******************************************/

#include <iostream> 
#include <cstring> 
using namespace std;

struct building {
	char etunimi[30];
	char sukunimi[30];
	char osoite[40];
	int postinumero;
	int kengannumero;
	float koulumatka;
};

int main(void)
{
	building tietue;

	cout << "Syötä etunimesi: " << endl;
	cin.get(tietue.etunimi, 30);

	cout << "Syötä kengannumero: " << endl;
	cin >> tietue.kengannumero;
	cout << "Syötä sukunimesi: " << endl;
	cin.get();
	cin.get(tietue.sukunimi, 30);
	cout << "Syötä koulumatka: " << endl;
	cin >> tietue.koulumatka;
	cout << "Syötä osoite: " << endl;
	cin.get();
	cin.get(tietue.osoite, 40);
	cout << "Syötä postinumero: " << endl;
	cin >> tietue.postinumero;

	cout << tietue.etunimi << endl;
	cout << tietue.sukunimi << endl;
	cout << tietue.osoite << endl;
	cout << tietue.postinumero << endl;
	cout << tietue.kengannumero << endl;
	cout << tietue.koulumatka << endl;

	return 0;
}