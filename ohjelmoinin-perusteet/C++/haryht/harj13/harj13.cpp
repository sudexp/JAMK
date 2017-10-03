/******************************************
Tehtävä: Harjoitus 13 (Palautus vko 43)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka kysyy etunimesi ja sukunimesi. Ohjelma
yhdistää nimet yhdeksi merkkijonoksi ja tulostaa ne
lopuksi naytölle.

a) Kayta cstring-kirjastoa (C:n merkkitaulukot)
tehdäksesi merkkijonojen yhdistämisen
b) Kayta string-kirjastoa (C++:n merkkijonot)
tehdäksesi merkkijonojen yhdistämisen  TEE, JOS ON AIKAA

Esimerkki
Anna etunimi: Aku
Anna sukunimi: Ankka
Nimesi oli: Aku Ankka

Pvm: 03.10.2017
Versio: 1.0
******************************************/

#include <iostream> 
#include <cstring>
using namespace std;
int main(void)
{
	char etunimi[64];
	cout << "Syötä etunimi: ";
	cin.get(etunimi, 64);

	char sukunimi[32];
	cout << "Syötä sukunimi: ";
	cin.get();
	cin.get(sukunimi, 32);

	strcat(etunimi, " ");
	strcat(etunimi, sukunimi);
	cout << "Nimesi oli: " << etunimi << endl;
	return 0;
}