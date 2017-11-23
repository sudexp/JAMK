/******************************************
Teht‰v‰: Harjoitus 14 (Palautus vko 45)
Tekija: Sklyarov Dmitry
Kuvaus:
T‰ss‰ teht‰v‰ss‰ on k‰ytett‰v‰ C-kielen merkkitaulukoita! Taulukon m‰‰rittely on siis muotoa

char mjono[xx];

Tee ohjelma, joka kysyy k‰ytt‰j‰lt‰ 17 merkki‰
pitk‰n merkkijonon (ei v‰lily‰ntej‰).
a) Ohjelma tulostaa merkkijonon k‰‰nteisess‰ j‰rjestyksess‰ n‰yt‰lle
(tulostus tyyppi‰ "cout << mjono1[4];" jne)
b) Ohjelma k‰‰nt‰‰ annetun merkkijonon toiseen
merkkijonoon ja tulostaa sen n‰yt‰lle
(tulostus tyyppi‰ "cout << mjono2;")
c) merkkijono voi olla kuinka pitk‰
tahansa (max 100 kirjainta).
Sy‰tetyn merkkijonon pituutta ei saa
laskea mill‰‰n kirjastofunktiolla
(esim. lenght tms.) Ohjelma
tutkii onko annettu merkkijono
palindromi ja ilmoittaa sen k‰ytt‰j‰lle.
V‰lily‰nnit jonossa ovat sallittuja.

K‰ytt‰j‰ syˆtt‰‰ jonon: ABC_Kissa_kavelee
ohjelma tulostaa: eelevak_assiK_CBA

Pvm: 13.10.2017
Versio: 1.0
******************************************/

#include <iostream> 
#include <cstring> 
using namespace std;
int main(void)
{
	char mjono[100];
	char onojm[18];
	int i;
	int j;
	
	cout << "Syˆt‰ 17 merkki‰pitk‰n merkkijonon ilman v‰lilyˆntej‰: " << endl;
	cin.get(mjono, 100);

	while (strchr(mjono, ' ') != NULL || strlen(mjono) != 17) {
		cout << "V‰‰rin merkkijono. Merkkijono pit‰‰ olla 17 merkki‰pitk‰n‰ ja ilman v‰lilyˆntej‰." << endl;
		cout << "Syˆt‰ merkkijono: " << endl;
		cin >> mjono;
	}

	for (i = 0; i < 17; i++) {
		j = 16 - i;
		onojm[i] = mjono[j];
	}
	onojm[17] = '\0';
	cout << onojm << endl;

	return 0;
}