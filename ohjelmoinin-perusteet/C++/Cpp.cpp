#include <iostream>
using namespace std;
#include <fstream>
#include <string.h>

struct StudentInfo {
	char Name[32];
	char SurName[32];
	char Id[10];
	char GroupId[10];
};

int GetTotalTaskCount();
int GetStudentCount();
void GetInfo(const char * pTitle, char * pBuf, int bufSize);

int main()
{
	int students_count = GetStudentCount();
	if(students_count > 0) {
		ofstream file_out;
		
		file_out.open("results.csv");
		if(!file_out) {
			cout << "Can not open file!\n";
			return 1;
		}

		for(int i = 0; i < students_count; i++) {
			int total_task_count = 0;
			char result[64];
			StudentInfo student_info;
		
			GetInfo("Student name?\n", student_info.Name, 32);
			GetInfo("Student surname?\n", student_info.SurName, 32);
			GetInfo("Student ID?\n", student_info.Id, 10);
			GetInfo("Group ID?\n", student_info.GroupId, 10);
				
			total_task_count = GetTotalTaskCount();
				
			if(total_task_count < 20)
				strcpy(result, "Course is not passed\0");
			else {
				char buf[32];
				int  total_themes_completed = 0;
				GetInfo("Extra task passed?\n", buf, 32);
				if(strcmp(buf, "yes") == 0) {
					const char * p_themes[] = {"Does the student know the topic 'käyttöohje, aikataulut'?\n", 
											   "Does the student know the topic 'tekijän omatoimisuus'?\n", 
											   "Does the student know the topic 'kuinka pystyy hakemaan tietoa (help -ominaisuuksien käyttö)'?\n",
											   "Does the student know the topic 'kuinka pystyy selvittämään ongelmia, joita tulee esille (debuggerin käyttö, muutujien selvitys ajon aikana ym)'?\n",
											   "Does the student know the topic 'dokumentaation ulkoasu'?\n",
											   "Does the student know the topic 'project -ominaisuuden käyttö'?\n", 
											   "Does the student know the topic 'oma include -tiedoston käyttö'?\n", 
											   "Does the student know the topic 'kirjastojen käyttö'?\n", 
											   "Does the student know the topic 'tekijän omatoimisuus'?\n", 
											   "Does the student know the topic 'esikääntäjän komentojen hallinta'?\n", 
											   "Does the student know the topic 'taulukot, tietueet'?\n",
											   "Does the student know the topic 'osoittimet ja dyn. muistinvaraus'?\n",
											   "Does the student know the topic 'funktiot ja param. välitys'?\n",
											   "Does the student know the topic 'tiedostojen käsittely'?\n"};

					int j = 0, max_themes = 14;
					while(j < max_themes) {
						GetInfo(p_themes[j], buf, 64);
						if(strcmp(buf, "yes") == 0)
							total_themes_completed++;
						j++;
					}

					switch(total_themes_completed) {
						case 1:
							total_themes_completed++;
							break;
						case 2:
							total_themes_completed++;
							break;
						case 3:
							total_themes_completed++;
							break;
						case 4:
							total_themes_completed++;
							break;
						case 5:
							total_themes_completed++;
							break;
						case 6:
							total_themes_completed++;
							break;
						case 7:
							total_themes_completed++;
							break;
						case 8:
							total_themes_completed++;
							break;
						case 9:
							total_themes_completed++;
							break;
						case 10:
							total_themes_completed++;
							break;
						case 11:
							total_themes_completed++;
							break;
						case 12:
							total_themes_completed++;
							break;
						case 13:
							total_themes_completed++;
							break;
						case 14:
							total_themes_completed++;
							break;							
						default:
							total_themes_completed++;
							break;
					}
					result[0] = '2';

					if (total_themes_completed > 3 && total_themes_completed < 7) {
						//result[0] = '3' - ei toimi;
						strcpy(result, "3\0");
					}
					else if (total_themes_completed > 7  &&  total_themes_completed < 11) {
						strcpy(result, "4\0");
					}
					else if (total_themes_completed > 11) {
						strcpy(result, "5\0");
					}
					else {
						strcpy(result, "2\0");
					}
				}

				else {
					strcpy(result, "1\0");
				}
			}
			
			file_out << "Ohkelmoinin perusteet:" << ";" << student_info.Name << ";" << student_info.SurName << ";" << student_info.Id << ";" << student_info.GroupId << ";" << result << endl;
		}
		file_out.close();
	}
	else
		cout << "Student count must be positive" << endl;
	return 0;
}

int GetTotalTaskCount()
{
	int total_task_count = 0;
	
	cout << "How many tasks complete?\n";
	cin >> total_task_count;
	cin.get();

	return total_task_count;
}

int GetStudentCount()
{
	int students_count = 0;
	
	cout << "Students count?\n";
	cin >> students_count;
	cin.get();

	return students_count;
}

void GetInfo(const char * pTitle, char * pBuf, int bufSize)
{
	cout << pTitle;
	cin.get(pBuf, bufSize);
	cin.get();
}