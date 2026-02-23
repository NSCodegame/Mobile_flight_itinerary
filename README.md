# Mobile Flight Itinerary (Flightscry PoC)

This project is an Android proof-of-concept for **Flightscry**, built with Kotlin and XML using Skyscanner Backpack components.

## What's included

- Android app skeleton using an Empty Activity structure.
- Backpack dependency configured in `app/build.gradle`:
  - `net.skyscanner.backpack:backpack-android:43.0.0`
- A mobile itinerary UI in `activity_main.xml` containing:
  - Flight information card with flight number
  - Departure card with airport code + departure time
  - Arrival card with airport code + arrival time

## Run

1. Open the project in Android Studio.
2. Let Gradle sync.
3. Run on an emulator/device (API 33+).
