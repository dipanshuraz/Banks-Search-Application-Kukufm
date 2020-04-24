import React from 'react'
import { connect } from 'react-redux'
import { markFavBank } from '../redux/action'

function FavBankTable(props) {
  const { data, markFavBank } = props
  console.log(data, 'helloFav')
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Ifsc</th>
            <th scope="col">bank_name</th>
            <th scope="col">Branch</th>
            <th scope="col">address</th>
            <th scope="col">City</th>
            <th scope="col">district</th>

          </tr>
        </thead>
        <tbody>
          {data && data.map((elem, i) => {

            return (<tr onClick={() => console.log(elem.ifsc, 'favTable')} key={elem.ifsc}>
              <th scope="row">{i}</th>
              <td>{elem.ifsc}</td>
              <td>{elem.bank_name}</td>
              <td>{elem.branch}</td>
              <td>{elem.address}</td>
              <td>{elem.city}</td>
              <td>{elem.district}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps = (state) => ({
  data: state.favBanks
})

const mapDispatchToProps = dispatch => ({
  markFavBank: payload => dispatch(markFavBank(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavBankTable)
