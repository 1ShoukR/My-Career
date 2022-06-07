# Tip Calculator

# example one



# bill = float(input("what was your bill "))
# service = input("How was your service? "
# "(Enter good, fair, or bad) ")



# def tipCalc(bill, service):
  #  if service == 'good':
   #     tip = bill * 0.20
    #    total = bill + tip
    #
   # elif service == 'fair':
      #  tip = bill * 0.15
       # total = bill + tip
    
   # elif service == 'bad':
    #    tip = bill * 0.10
    #    total = bill + tip

   # fTip = "${:,.2f}".format(tip)
   # fTotal = "${:,.2f}".format(total)
   # print(f"Tip amount: {fTip}")
   # print(f"Total amount: {fTotal}")

 # tipCalc(bill, service)

#Example 2

bill = float(input("Total bill amount? "))
service = input("How was the service? 
"(Enter good, fair, or bad) ")
people = int(input("Split between how many people? "))

def getTip(bill, service, people):
    if service == 'good':
        tip = bill* 0.20
        total = bill + tip
        individual = total / people

    elif service == 'fair': 
        tip = bill * 0.15
        total = bill +tip
        idividual = total / people
    elif service == 'bad':
        tip = bill * 0.10
        total = bill + tip
        # not done yet.
        