<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<style>
    .container {


        background-color: black;
        height: 160px;

        width: 800px;
    }


    img {
        margin-top: 9px;
        margin-left: 15px;
        border-radius: 10px;
    }

    .cards {
        font-size: 15px;
        padding: 1px;
        position: relative;
        color: #fff;
        left: 280px;

        margin-top: -130px;

    }
    .heros{
        font-size: 20px;
    }

    .duration {
        height: 20px;
        width: 50px;
        margin-top: -30px;
        margin-left: 210px;
        position: relative;
        z-index: 2;
        font-size: 15px;
        border-radius: 5px;
        color: #fff;
        background: rgba(34, 28, 28, 0.6);
    }
</style>

<body>
    <div class="container">
        <div class="pic"> <img
                src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
                height="140px" width="250px">

            <div class="duration"> &nbsp; 31:22 &nbsp; </div>


        </div>



        <script>
            function createCard(title, cName, views, monthsOld, duration, thumbnail) {
                // Finish this function
                if (views >= 1000 || views < 1000000) {
                    views = views / 1000 + 'k' + " views" + "<b> . </b>"



                }
                else {
                    views = "no views"
                }

                a = document.createElement("h3");
                a.setAttribute("class", "cards heros")
                a.innerHTML = title
                document.querySelector(".container").after(a);


                b = document.createElement("span");
                b.setAttribute("class", "me  cards")
                b.innerHTML = cName + "<b> . </b> "
                document.querySelector("h3").after(b)


                c = document.createElement("span");
                c.setAttribute("class", "btn cards")
                c.innerHTML = views
                document.querySelector(".me").after(c)


                d = document.createElement("span");
                d.setAttribute("class", " cards")

                d.innerHTML = monthsOld + " months ago"
                document.querySelector(".btn").after(d)










            }
            createCard("<b>Introduction to Backend | Sigma Web Dev video #2</b>", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


        </script>




    </div>






</body>


</html>
