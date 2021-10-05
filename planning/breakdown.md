# Scheduler project breakdown

## Components

- Button
- DayList
- DayListItem
- InterviewerList
- InterviewerListItem
- Appointment
- Appointment/Header
- Appointment/Empty
- Appointment/Show
- Appointment/Form
- Appointment/Status
- Appointment/Error
- Appointment/Confirm

### Button

- State:
- Props:danger,confirm
- Used by:appointment/Confim appointment/Form

### DayList

- State:
- Props:days(array),day,setDay(fn)
- Used by:Application

### DayListItem

- State:
- Props:spots,selected,name,setDay(fn),key
- Used by:DayList

### InterviewerList

- State:
- Props:interviewers(array),interviewer,setInterviewer(fn)
- Used by:Form

### InterviewerListItem

- State:
- Props:selected,setInterviewer,key,name,avatar,setInterviewer
- Used by:InterviewerList

### Appointment

- State:mode, transition, back -useVisualMode
- Props:[id,interview{student,inteviewer{avatar,id,name}},bookInterview(fn),time,key]
- Used by:Application

### Appointment/Header

- State:
- Props:
- Used by:

### Appointment/Empty

- State:
- Props:
- Used by:

### Appointment/Show

- State:
- Props:
- Used by:

### Appointment/Form

- State:
- Props:
- Used by:

### Appointment/Status

- State:
- Props:
- Used by:

### Appointment/Error

- State:
- Props:
- Used by:

### Appointment/Confirm

- State:
- Props:
- Used by:

Application

- State
  state- (day,days(array-id,name,appointments,interviewers,spots),appointments(OBJ-id,time,interview({student,interviewer})),interviewers(objects))
