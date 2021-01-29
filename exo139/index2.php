<hr>
     <h1>Date du jour</h1>
     <form>

       <!-- Instructions : Créer la liste de jour (en chiffres), de mois (en chiffres) et d'année en PHP. -->
       <label for="day">Day</label>
       <select  id="day">
           <?php
           for ($i = 1 ; $i <= 31 ; $i++){
               echo "<option value='.$i.'>$i</option>";
           }
           ?>
       </select>

       <label for="month">Month</label>
       <select  id="month">
           <?php
           for ($i = 1 ; $i <= 12 ; $i++){
               echo "<option value='.$i.'>$i</option>";
           }
           ?>
       </select>

         <label for="year">Year</label>
       <select  id="year">
           <?php
           for ($i = 1930 ; $i <= 2022 ; $i++){
               echo "<option value='.$i.'>$i</option>";
           }

           ?>
       </select>
     </form>
  </body>
</html>