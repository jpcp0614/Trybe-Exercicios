'''
Dado um histórico de commits, encontre o primeiro commit problemático
Cada commit:
    {
        "author": str(),
        "commit_message": str(),
        "test_passing": bool(),
    }
'''


from commits import COMMIT_HISTORY


def find_bad_commits(commit_history):
    low = 0
    high = len(commit_history)
    counter = 0

    while low < high:
        counter += 1
        mid = (low + high) // 2  # para ter um valor inteiro

        if commit_history[mid]["test_passing"] is True:
            low = mid + 1
        else:
            high = mid

    print(f"Número de comparações = {counter}")
    return low


bad_commit_id = find_bad_commits(COMMIT_HISTORY)
print(f"Bad commit #{bad_commit_id}: ")
print()
print(f"{COMMIT_HISTORY[bad_commit_id]}")
