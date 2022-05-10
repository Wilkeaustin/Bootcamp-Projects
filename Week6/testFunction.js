function getValue(string)
{
    switch(string)
    {
    case "Ace":
        return 14;
        break;
    case "Jack":
        return 11;
        break;
    case "Queen":
        return 12;
        break;
    case "King":
        return 13;
        break;
    default:
        return parseInt(string);
    }
}