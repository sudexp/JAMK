//  Esim.6-2
/*
#include <iostream> 
using namespace std;
int main(void)
{
	int luku = 5;
	int lukux;
	char merkki = 'a';
	float reaali = 5.5;
	float reaalix;
	lukux = merkki;
	cout << "\nchar -> int " << lukux;
	lukux = (int)reaali;
	cout << "\nfloat -> int " << lukux;
	reaalix = (float)luku;
	cout << "\nint -> float " << reaalix;
	reaalix = merkki;
	cout << "\nchar -> float " << reaalix;
	return 0;
}
*/

// Esim.6-4
/*#include <iostream> 
using namespace std;
#include <cstring> 
int main()
{
	char jono1[10] = "C-kieli";
	char jono2[10] = { 'C', '+', '+', '\0' };
	cout << "Alkuarvo jono1:ss„ on: " << jono1;
	strcpy_s(jono1, jono2);
	cout << "\nJa lopputulos on: " << jono1;
	return 0;
}*/

#include <iostream> 
using namespace std;
int main()
{
	int ika=-100;
	char kokonimi[30];
	char osoite[30];
	
	
	while (ika < 0)
	{
		cout << "\nIk„? ";
		cin >> ika;
		if (ika < 0)
		{
			cout << "Anna ik„ positiivisena" << endl;
			cout << "Kiitos!" << endl;
		}
		else
		{
			cout << "Hyvin tehty!" << endl;
		}
	}
	
	cout << "Nimi? ";
	cin.get(); // lukee yhden merkin n„pp„in puskurista
	cin.get(kokonimi, 30);
	cout << "Osoite? ";
	cin.get();
	cin.get(osoite, 30);
	cout << "\nIk„ : " << ika;
	cout << "\nNimi: " << kokonimi;
	cout << "\nOsoite: " << osoite;
	return 0;
}

