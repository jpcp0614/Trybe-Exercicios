import csv


def export_report(report_data: dict):
    FILE_PATH = 'data/report.csv'
    with open(FILE_PATH, mode='w') as file:
        csv_write = csv.writer(file)
        csv_write.writerow(['Console', 'Quantidade'])

        for key, value in report_data.items():
            csv_write.writerow([key, value])
