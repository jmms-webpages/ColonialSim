# Firestore Security Specification - Road to Revolution

## 1. Data Invariants
- `users`: Users may only read and write their own profile document (`request.auth.uid == userId`). Roles can only be updated by verified admins or initial self-registration where default role is 'student' (or teacher/admin if email matches bootstrapped administrator `jaf2jc@bearworks.jackson.sparcc.org`).
- `gameProgress`: Students may read and write their own game progress (`request.auth.uid == userId`). Teachers and Admins can view student progress for classes they manage.
- `questionAttempts`: Any authenticated student can log their own question attempt (`request.resource.data.userId == request.auth.uid`). Teachers and Admins can read all attempts to calculate standards mastery and error analysis.
- `classroomStats`: Classroom aggregate colony stats can be read by authenticated users. Writes can be updated by authenticated participants or teachers.
- `classes`: Can be created and managed by Teachers and Admins (`teacherId == request.auth.uid` or admin). Students can read classes they belong to.
- `classEvents`: Teachers/Admins can create and update breaking news events. All authenticated students can read active events.
- `customQuestions`: Teachers/Admins can create, edit, or delete custom questions. All authenticated students can read active questions.

## 2. The "Dirty Dozen" Threat Payloads
1. Student attempts to update another student's `gameProgress` document. (Denied)
2. Student attempts to change their own role in `users/{userId}` to 'admin'. (Denied)
3. Unauthenticated client attempts to read `questionAttempts`. (Denied)
4. Attacker passes 2MB junk text into `reflection` or `studentName`. (Denied via `.size() <= MAX`)
5. Student attempts to create a custom question in `customQuestions`. (Denied - requires teacher or admin)
6. Non-owner attempts to overwrite or delete a teacher's class. (Denied)
7. Shadow update: Updating `gameProgress` with unknown extra injected fields. (Denied)
8. Spoofed timestamp injection into `questionAttempts`. (Denied)
9. Student attempts to wipe `classroomStats`. (Denied)
10. Malicious document ID containing illegal characters or path traversal. (Denied via `isValidId`)
11. Unauthenticated reading of private user emails. (Denied)
12. Attempt to modify someone else's class event. (Denied)

## 3. Administrator
- Bootstrapped Admin: `jaf2jc@bearworks.jackson.sparcc.org`
