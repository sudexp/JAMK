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

Pvm: 29.9.2017
Versio: 1.0
******************************************/

#include <iostream> 
using namespace std;
int main(void)
{
	char nimi[32];
	cout << "Syötä etunimi: ";
	cin.get(nimi, 32);
	char sukunimi[32];
	cout << "Syötä sukunimi: ";
	cin.get();
	cin.get(sukunimi, 32);
	cout << "Nimesi oli: " << nimi << " " << sukunimi << endl;
	return 0;
}