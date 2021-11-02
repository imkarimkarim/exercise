import math

# Copied from: https://stackoverflow.com/questions/27928/


def getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2):
    R = 6371
    # Radius of the earth in km
    dLat = deg2rad(lat2-lat1)
    # deg2rad below
    dLon = deg2rad(lon2-lon1)
    a = math.sin(dLat/2) * math.sin(dLat/2) + math.cos(deg2rad(lat1)) * \
        math.cos(deg2rad(lat2)) * math.sin(dLon/2) * math.sin(dLon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    d = R * c
    # Distance in km
    return d


def deg2rad(deg):
    return deg * (math.pi/180)


print(getDistanceFromLatLonInKm(34, 49, 34, 65))

